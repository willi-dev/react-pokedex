import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import rootReducer from './rootReducer'

const middleware = applyMiddleware(thunk, logger)

export default createStore( rootReducer, middleware )