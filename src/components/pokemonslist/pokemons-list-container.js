import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MONSTER_PER_PAGE, MONSTER_LIST } from '../../graphql/query'
import { pokemonsRequest, pokemonsRequestSuccess, pokemonsRequestError } from '../../store/pokemon/action'

import Boxes from '../loading/boxes'
import ImgBox from '../general/img-box'
import TextCapsule from '../general/text-capsule'
import Text from '../general/text'
import Filter from '../general/filter'

const PokemonsListContainer = (props) => {
  const [perPage, setPerPage] = useState(MONSTER_PER_PAGE)

  /**
   * handleScroll
   * @author willi <https://github.com/willi-dev>
   */
  const handleScroll = async () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return 
    // console.log('fetch monster: by scroll')
    await props.fetchMonster(perPage)
    setPerPage(perPage + MONSTER_PER_PAGE)
  }

  useEffect(() => {
    if (props.monsterList.length === 0) {
      // console.log('fetch monster: init')
      const initFetch = (async () => await props.fetchMonster(perPage))
      setPerPage(perPage + MONSTER_PER_PAGE)
      initFetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage])
  
  return (
    <div className="flex flex-wrap ">
      <Filter/>
      {
        props.monsterList
          .filter(m => m.classification === props.activeFilter || props.activeFilter === '')
          .map((monster, index) => (
          <Fragment key={index}>
              <div className="w-full md:w-1/4 wrounded overflow-hidden">
                <div className="mb-4 mx-2 shadow-lg">
                  <ImgBox image={monster.image} text={monster.name} />
                  <div className="px-6 py-4">
                    <Text styleType="title">
                      {monster.name}
                    </Text>
                    <Text>
                      MaxCP: {monster.maxCP}
                    </Text>
                    <Text>
                      height: {monster.height.minimum} {monster.height.maximum}
                    </Text>
                    <Text>
                      weight: {monster.weight.minimum} {monster.weight.maximum}
                    </Text>           
                  </div>
                  <div className="px-6 py-4">
                    <TextCapsule>
                      {monster.classification}
                    </TextCapsule> 
                  </div>
                  <div className="px-6 pb-4">
                    <Link to={`/pokemon/${monster.name}-${monster.id}`} className="block w-full bg-orange-400 hover:bg-orange-200 text-white hover:text-blue-400 text-center font-bold py-2 px-4 rounded">
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
          </Fragment>
        ))
      }
      {
        (props.monsterLoading) 
        ? <Fragment>
            <Boxes total={MONSTER_PER_PAGE}/>
          </Fragment>
        : null
      }
    </div>
  )
}

const mapStateToProps = store => ({
  monsterList: store.pokemon.pokemonsList,
  monsterLoading: store.pokemon.loading,
  monsterError: store.pokemon.error,
  activeFilter: store.pokemon.filter
})

const mapDispatchToProps = dispatch => ({
  fetchMonster: async (perPage) => { 
    dispatch(pokemonsRequest())
    try {
      const fetching = await axios.post('https://graphql-pokemon.now.sh', {
        query: MONSTER_LIST,
        variables: {
          first: perPage
        }
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      dispatch(pokemonsRequestSuccess(fetching.data.data.pokemons))
    } catch (e) {
      dispatch(pokemonsRequestError(e))
      // console.log(e)
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsListContainer)