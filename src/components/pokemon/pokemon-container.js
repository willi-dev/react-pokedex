import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { pokemonRequest, pokemonRequestSuccess, pokemonRequestError, clearPokemon } from '../../store/pokemon/action'
import { MONSTER } from '../../graphql/query'

import TextCapsule from '../general/text-capsule'
import Text from '../general/text'

const PokemonContainer = props => {
  const {
    fetchMonsterItem,
    idMonster, 
    nameMonster,
    monsterLoading,
    monsterItem,
    monsterError
  } = props
  
  useEffect(() => {
    const initFetch = (async () => await fetchMonsterItem(idMonster, nameMonster))
    initFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let types = []
  if (typeof monsterItem.types !== 'undefined') {
    types = [...monsterItem.types]
  }

  let weaknesses = []
  if (typeof monsterItem.weaknesses !== 'undefined') {
    weaknesses = [...monsterItem.weaknesses]
  }

  let resistant = []
  if (typeof monsterItem.resistant !== 'undefined') {
    resistant = [...monsterItem.resistant]
  }
  
  // let attacks = {}
  let attacksFast = []
  let attacksSpecial = []
  if (typeof monsterItem.attacks !== 'undefined') {
    // attacks = {...monsterItem.attacks}
    attacksFast = [...monsterItem.attacks.fast]
    attacksSpecial = [...monsterItem.attacks.special]
  }

  if (monsterLoading) {
    return 'loading...'
  }

  if (monsterError) {
    return 'Error...'
  }
  
  return (
    <div className="flex flex-wrap justify-center">
      {
        (!monsterLoading) && (
          <div className="w-full md:w-1/3 wrounded overflow-hidden">
            <div className="shadow-lg mx-5 mb-5 px-4 py-4">
              <img src={monsterItem.image} alt={monsterItem.name} />
              <Text styleType="title">{monsterItem.name}</Text>
              <TextCapsule>{monsterItem.classification}</TextCapsule>
              <Text>MaxCP: {monsterItem.maxCP}</Text>
              <Text>FleeRate: {monsterItem.fleeRate}</Text>
              {
                (typeof monsterItem.height !== 'undefined') && (
                  <Text>
                    Height: {monsterItem.height.minimum} - {monsterItem.height.maximum}
                  </Text>
                )
              }
              {
                (typeof monsterItem.weight !== 'undefined') && (
                  <Text>
                    Weight: {monsterItem.weight.minimum} - {monsterItem.weight.maximum}
                  </Text>
                )
              }
              <Text>
                Types &nbsp;
                {
                  types.map((type, index) => (
                    <TextCapsule key={index}>{type}</TextCapsule>
                  ))            
                }
              </Text>
              <Text >
                Weaknesses
              </Text>
              {
                weaknesses.map((weak, index) => (
                  <TextCapsule key={index}>{weak}</TextCapsule>
                ))
              }
              <Text >
                Resistant
              </Text>
              {
                resistant.map((resist, index) => (
                  <TextCapsule key={index}>{resist}</TextCapsule>
                ))
              }
              <Text >
                Attacks Fast
              </Text>
              {
                (typeof attacksFast !== 'undefined') && (
                  attacksFast.map((attack, index) => (
                    <TextCapsule key={index}>{attack.type} - {attack.name} {attack.damage}</TextCapsule>
                  ))
                )
              }
              <Text>
                Attacks Special
              </Text>
              {
                (typeof attacksSpecial !== 'undefined') && (
                  attacksSpecial.map((attack, index) => (
                    <TextCapsule key={index}>{attack.type} - {attack.name} {attack.damage}</TextCapsule>
                  ))
                )
              }
            </div>
          </div>
        ) 
      }
      
    </div>
  )
}

const mapStateToProps = (store, ownProps) => ({
  nameMonster: ownProps.match.params.pokemon.split('-')[0],
  idMonster: ownProps.match.params.pokemon.split('-')[1],
  monsterLoading: store.pokemon.loading,
  monsterError: store.pokemon.error,
  monsterItem: store.pokemon.pokemon
})

const mapDispatchToProps = dispatch => ({
  fetchMonsterItem: async (id, name) => {
    dispatch(pokemonRequest())
    dispatch(clearPokemon())
    try {
      const fetching = await axios.post('https://graphql-pokemon.now.sh', {
        query: MONSTER,
        variables: {
          id: id,
          name: name
        }
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      dispatch(pokemonRequestSuccess(fetching.data.data.pokemon))
    } catch (e) {
      dispatch(pokemonRequestError(e))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer)