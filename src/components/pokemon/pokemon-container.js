import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { pokemonRequest, pokemonRequestSuccess, pokemonRequestError, clearPokemon } from '../../store/pokemon/action'
import { MONSTER } from '../../graphql/query'

// import ImgBox from '../general/img-box'
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

  if (monsterLoading) {
    return "loading..."
  }

  if (monsterError) {
    return 'Error...'
  }

  
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/3 wrounded overflow-hidden">
        <div className="shadow-lg mx-5 mb-5 px-4 py-4">
          <img src={monsterItem.image} alt={monsterItem.name} />
          <Text styleType="title">
            {monsterItem.name}
          </Text>
          <TextCapsule>
            {monsterItem.classification}
          </TextCapsule>
          <Text>
            MaxCP: {monsterItem.maxCP}
          </Text>
          <Text>
            FleeRate: {monsterItem.fleeRate}
          </Text>
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

          {
            types.map((type, index) => (
              <Text key={index}>{type}</Text>
            ))            
          }
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
        </div>
      </div>
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