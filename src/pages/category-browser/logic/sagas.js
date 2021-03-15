import { takeLatest, put, take, all } from 'redux-saga/effects'

import * as actions from './actions'
import * as categoryActions from '../../../common/logic/categories/actions'
import * as productsActions from '../../../common/logic/products/actions'
import { CATEGORIES_ROOT } from '../../../common/logic/categories/utils'

function * navigateWorker (action) {
  try {
    yield put(categoryActions.categoriesRequest()) // This could be done better, see .todo about CategoryTree.

    if (action.payload && action.payload !== CATEGORIES_ROOT) {
      yield put(productsActions.productsRequest(action.payload))
    }

    yield all([
      take(categoryActions.categoriesSuccess().type),
      take(productsActions.productsSuccess().type)
    ])

    yield put(actions.navigateSuccess(action.payload))
  } catch (error) {
    console.error(error)
    yield put(actions.navigateFailure(action.payload, error))
  }
}

function * navigateWatcher () {
  yield takeLatest(actions.navigateRequest().type, navigateWorker)
}

const watchers = [
  navigateWatcher
]

export default watchers
