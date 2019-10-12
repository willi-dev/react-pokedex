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
export const pokemonsRequest = () => ({
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
export const pokemonRequest = () => ({
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
