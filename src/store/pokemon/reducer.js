import {
  FETCH_POKEMONS_LIST,
  FETCH_POKEMONS_LIST_SUCCESS,
  FETCH_POKEMONS_LIST_ERROR,
  FETCH_POKEMON,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_ERROR,
  SET_FILTER,
  CLEAR_POKEMON
} from './actionType'

/**
 * initialState 
 */
const initialState = {
  pokemonsList: [],
  pokemon: {},
  error: null,
  loading: false,
  filter: '',
  currentPerPage: 8
}

const pokemonReducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case FETCH_POKEMONS_LIST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_POKEMONS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonsList: action.payload,
        currentPerPage: state.currentPerPage + 8
      }
    case FETCH_POKEMONS_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case FETCH_POKEMON:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_POKEMON_SUCCESS: 
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
        error: null
      }
    case FETCH_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case CLEAR_POKEMON:
      return {
        ...state,
        loading: false,
        pokemon: {}
      }
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      }
    default: 
      return state
  }
}

export default pokemonReducer