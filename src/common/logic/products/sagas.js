import { normalize } from 'normalizr'
import { takeLatest, call, put } from 'redux-saga/effects'

import { getProductsByCategoryId } from '../api'
import * as actions from './actions'
import responseSchema from './schemas'

function * productsWorker (action) {
  try {
    const response = yield call(getProductsByCategoryId, action.payload)
    const normalized = yield call(normalize, response.data, responseSchema)

    yield put(actions.productsSuccess(action.payload, normalized))
  } catch (error) {
    console.error(error)
    yield put(actions.productsFailure(error))
  }
}

function * productsWatcher () {
  yield takeLatest(actions.productsRequest().type, productsWorker)
}

export default [
  productsWatcher
]
