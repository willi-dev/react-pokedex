import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { MONSTER_PER_PAGE, MONSTER_LIST } from '../../graphql/query'
import { pokemonsRequest, pokemonsRequestSuccess, pokemonsRequestError } from '../../store/pokemon/action'

import Box from '../loading/box'

const PokemonsListContainer = (props) => {
  const [perPage, setPerPage] = useState(MONSTER_PER_PAGE)
  // const [loadingList, setLoadingList] = useState(false)
  // const [monsterList, setMonsterList] = useState([])

  /**
   * fetchMonsterList
   * fetching monster list
   * @author willi <https://github.com/willi-dev>
   */
  const fetchMonsterList = async () => {
    console.log(perPage)
    props.fetchMonster()
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
      setPerPage(perPage + MONSTER_PER_PAGE)
      props.fetchMonsterSuccess(fetching.data.data.pokemons)
    } catch (e) {
      props.fetchMonsterError(e)
      console.log(e)
    }
    console.log(props)
  }

  /**
   * handleScroll
   * @author willi <https://github.com/willi-dev>
   */
  const handleScroll = async () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return 
    // console.log(props)
    console.log(props.monsterLoading)
    // if (props.monsterLoading === false) {
      console.log('fetch monster...')
      await fetchMonsterList()
    // }
  }

  useEffect(() => {
    const initFetch = (async () => await fetchMonsterList())
    if (props.monsterList.length === 0) {
      // setLoadingList(true)
      initFetch()
      // setLoadingList(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage])

  
  return (
    <div className="flex flex-wrap ">
      {
        props.monsterList.map((monster, index) => (
          <Fragment key={index}>
              <div className="w-1/4 wrounded overflow-hidden">
                <div className="mb-2 mx-1 shadow-lg">
                  <div className="h-64 lg:h-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
                    style={{ backgroundImage: `url(${monster.image})`, backgroundPosition: `center center`, backgroundSize: `cover`}} title={monster.name} />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{monster.name}</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                  </div>
                </div>
              </div>
          </Fragment>
        ))
      }
      {
        (props.monsterLoading) 
        ? <Fragment>
            <Box/>
            <Box/>
            <Box/>
            <Box/>
          </Fragment>
        : null
      }
    </div>
  )
}

const mapStateToProps = store => ({
  monsterList: store.pokemon.pokemonsList,
  monsterLoading: store.pokemon.loading,
  monsterError: store.pokemon.error
})

const mapDispatchToProps = dispatch => ({
  fetchMonster: () => { dispatch(pokemonsRequest()) },
  fetchMonsterSuccess: (payload) => { dispatch(pokemonsRequestSuccess(payload)) },
  fetchMonsterError: (payload) => { dispatch(pokemonsRequestError(payload)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsListContainer)