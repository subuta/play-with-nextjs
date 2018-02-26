import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

const middlewares = [thunk]

const counter = (state = 0, action) => {
  if (action.type === 'increment') {
    return state + 1
  } else if (action.type === 'decrement') {
    return state - 1
  }
  return state
}

const reducers = {
  counter
}

// return createStore
export default (initialState = {}) => {
  const isBrowser = typeof window !== 'undefined'

  // Grab the state from a global variable injected into the server-generated HTML
  if (isBrowser) {
    initialState = window.__INITIAL_STATE__
    // Allow the passed state to be garbage-collected
    delete window.__INITIAL_STATE__
  }

  return createStore(
    combineReducers({
      ...reducers
    }),
    initialState,
    compose(
      applyMiddleware(...middlewares),
      // enable redux dev-tools
      isBrowser ? window.devToolsExtension() : (f) => f
    )
  )
}