import { takeLatest, call, put, take } from 'redux-saga/effects'

import * as actions from './actions'
import * as categoryActions from '../../../common/logic/categories/actions'
import * as productsActions from '../../../common/logic/products/actions'
import { CATEGORIES_ROOT } from '../../../common/logic/categories/constants'

function * navigateWorker (action) {
  try {
    yield put(categoryActions.categoriesRequest())
    yield take(categoryActions.categoriesSuccess().type)

    if (action.payload && action.payload !== CATEGORIES_ROOT) {
      yield put(productsActions.productsRequest(action.payload))
      yield take(productsActions.productsSuccess().type)
    }

    yield put(actions.navigateSuccess(action.payload))
  } catch (error) {
    console.error(error)
    yield put(actions.navigateFailure(action.payload, error))
  }
}

function * navigateWatcher () {
  yield takeLatest(actions.navigateRequest().type, navigateWorker)
}

export default [
  navigateWatcher
]
