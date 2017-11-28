import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { date } from '../reducers'

export const store = createStore(date, applyMiddleware(logger))
