import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const storeFactory = () => {
  // Handle middlewares
  const middlewares = [sagaMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  // Handle enhancers
  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  // Create the store
  const store = createStore(rootReducer, composedEnhancers)

  // Start the saga middleware
  sagaMiddleware.run(rootSaga)

  return store
}

export default storeFactory
