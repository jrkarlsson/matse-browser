import { all, spawn, call } from 'redux-saga/effects'

import categoriesWatchers from './categories/sagas'
import productsWatchers from './products/sagas'
import categoryBrowserWatchers from '../../pages/category-browser/logic/sagas'

function * rootSaga () {
  const sagas = [
    ...categoriesWatchers,
    ...productsWatchers,
    ...categoryBrowserWatchers
  ]

  yield all(sagas.map(saga =>
    spawn(function * () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  )
}

export default rootSaga
