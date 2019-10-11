import { combineReducers } from 'redux'

import pokemonReducer from './pokemon/reducer'

export default combineReducers({
  pokemon: pokemonReducer
})