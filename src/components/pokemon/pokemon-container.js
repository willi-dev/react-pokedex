import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { pokemonRequest } from '../../store/pokemon/action'

import BoxDetail from '../loading/box-detail'
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
    const initFetch = (async () => await fetchMonsterItem({ id: idMonster, name: nameMonster }))
    initFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (monsterError) {
    return 'Error...'
  }
  
  return (
    <div className="flex flex-wrap justify-center">
      {
        (monsterLoading)
        ? <Fragment>
            <BoxDetail/>
          </Fragment>
        : null
      }
      {
        (Object.keys(monsterItem).length > 0) && (
          <div className="w-full md:w-1/3 wrounded overflow-hidden">
            <div className="shadow-lg mx-5 mb-5 px-4 py-4">
              <img src={monsterItem.image} alt={monsterItem.name} />
              <Text styleType="title">{monsterItem.name}</Text>
              <TextCapsule>{monsterItem.classification}</TextCapsule>
              <Text>MaxCP: {monsterItem.maxCP}</Text>
              <Text>FleeRate: {monsterItem.fleeRate}</Text>
              <Text>
                Height: {monsterItem.height.minimum} - {monsterItem.height.maximum}
              </Text>
              <Text>
                Weight: {monsterItem.weight.minimum} - {monsterItem.weight.maximum}
              </Text>
              <Text>
                Types &nbsp;
                {
                  monsterItem.types.map((type, index) => (
                    <TextCapsule key={index}>{type}</TextCapsule>
                  ))
                }
              </Text>
              <Text >
                Weaknesses
              </Text>
              {
                monsterItem.weaknesses.map((weak, index) => (
                  <TextCapsule key={index}>{weak}</TextCapsule>
                ))
              }
              <Text >
                Resistant
              </Text>
              {
                monsterItem.resistant.map((resist, index) => (
                  <TextCapsule key={index}>{resist}</TextCapsule>
                ))
              }
              <Text >
                Attacks Fast
              </Text>
              {
                monsterItem.attacks.fast.map((attack, index) => (
                  <TextCapsule key={index}>{attack.type} - {attack.name} {attack.damage}</TextCapsule>
                ))
              }
              <Text>
                Attacks Special
              </Text>
              {
                monsterItem.attacks.special.map((attack, index) => (
                  <TextCapsule key={index}>{attack.type} - {attack.name} {attack.damage}</TextCapsule>
                ))
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

const mapDispatchToProps = (dispatch) => ({
  fetchMonsterItem: (data) => {
    dispatch(pokemonRequest(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer)