import { normalize } from 'normalizr'
import { takeLatest, call, put } from 'redux-saga/effects'

import { getCategories } from '../api'
import * as actions from './actions'
import responseSchema from './schemas'

function * categoriesWorker (action) {
  try {
    const response = yield call(getCategories)
    const normalized = yield call(normalize, response.data, responseSchema)

    yield put(actions.categoriesSuccess(normalized))
  } catch (error) {
    console.error(error)
    yield put(actions.categoriesFailure(error))
  }
}

function * categoriesWatcher () {
  yield takeLatest(actions.categoriesRequest().type, categoriesWorker)
}

export default [
  categoriesWatcher
]
