import { createWrapper }                                             from 'next-redux-wrapper'
import { applyMiddleware, combineReducers, createStore }             from 'redux'
import { Persistor, persistStore }                                   from 'redux-persist'
import createSagaMiddleware, { SagaMiddleware }                      from 'redux-saga'
import { fork }                                                      from 'redux-saga/effects'
import { app, appInitialState, watchApp }                            from './app'
import { auth, authInitialState, watchAuth }                         from './auth'
import { cabinet, cabinetInitialState, watchCabinet }                from './cabinet'
import { notification, notificationInitialState, watchNotification } from './notification'
import { user, userInitialState, watchUser }                         from './user'


const initialState = {
  auth        : authInitialState,
  app         : appInitialState,
  cabinet     : cabinetInitialState,
  user        : userInitialState,
  notification: notificationInitialState,
}
const rootReducer = combineReducers({
  auth,
  app,
  cabinet,
  user,
  notification,
})
const rootSaga = function* startForman() {
  yield fork(watchAuth)
  yield fork(watchApp)
  yield fork(watchCabinet)
  yield fork(watchUser)
  yield fork(watchNotification)
}


// eslint-disable-next-line @typescript-eslint/ban-types
const bindMiddleware = (middleware: SagaMiddleware<object>[]) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const {composeWithDevTools} = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}
export let resistor: Persistor
export const makeStore = (context: any) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))
  // @ts-ignore
  resistor = persistStore(store, {}, function () {
    resistor.persist()
  })

  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

// @ts-ignore
export const wrapper = createWrapper(makeStore, initialState, {debug: true})

