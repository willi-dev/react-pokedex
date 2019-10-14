import axios from 'axios'
import { MONSTER_LIST, MONSTER } from '../../graphql/query'
import {
  FETCH_POKEMONS_LIST,
  FETCH_POKEMONS_LIST_SUCCESS,
  FETCH_POKEMONS_LIST_ERROR,
  FETCH_POKEMON,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_ERROR,
  CLEAR_POKEMON,
  SET_FILTER
} from './actionType'

/**
 * pokemonsRequest 
 * @author willi <https://github.com/willi-dev>
 */
export const pokemonsRequest = (data) => {
  const { perPage } = data
  return async (dispatch) => { 
    dispatch(pokemonsRequestStart())
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
    }
  }
}

/**
 * pokemonsRequestStart
 * @author willi <https://github.com/willi-dev> 
 */
export const pokemonsRequestStart = () => ({
  type: FETCH_POKEMONS_LIST
})

/**
 * pokemonsRequestSuccess
 * @author willi <https://github.com/willi-dev>
 */
export const pokemonsRequestSuccess = data => ({
  type: FETCH_POKEMONS_LIST_SUCCESS,
  payload: data
})

/**
 * pokemonsRequestError
 * @author willi <https://github.com/willi-dev>
 */
export const pokemonsRequestError = error => ({
  type: FETCH_POKEMONS_LIST_ERROR,
  payload: error
})

/**
 * pokemonRequest
 * @author willi <https://github.com/willi-dev>
 */
export const pokemonRequest = (data) => {
  const { id, name } = data
  return async (dispatch) => {
    dispatch(clearPokemon())
    dispatch(pokemonRequestStart())
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
}

export const pokemonRequestStart = () => ({
  type: FETCH_POKEMON
})

/**
 * pokemonRequestSuccess
 * @author willi <https://github.com/willi-dev>
 */
export const pokemonRequestSuccess = data => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: data
})

/**
 * pokemonRequestError
 * @author willi <https://github.com/willi-dev>
 */
export const pokemonRequestError = error => ({
  type: FETCH_POKEMON_ERROR,
  payload: error
})

/**
 * clearPokmeon
 */
export const clearPokemon = () => ({
  type: CLEAR_POKEMON
})

/**
 * setFilter
 * @author willi <https://github.com/willi-dev>
 */
export const setFilter = classification => ({
  type: SET_FILTER,
  payload: classification
})
