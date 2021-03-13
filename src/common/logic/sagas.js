import { all, spawn, call } from 'redux-saga/effects'

import categoriesWatchers from '../../pages/category-browser/logic/sagas'

function * rootSaga () {
  const sagas = [
    ...categoriesWatchers
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
