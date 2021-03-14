import { combineReducers } from 'redux'

import * as actions from './actions'

export const productsEntitiesSlice = (state = {}, action) => {
  if (action.type === actions.productsSuccess().type) {
    return {
      ...state,
      ...action.payload.data.entities.products
    }
  }

  return state
}

export const productsByCategoryIdSlice = (state = {}, action) => {
  if (action.type === actions.productsSuccess().type) {
    return {
      ...state,
      [action.payload.id]: action.payload.data.result
    }
  }

  return state
}

const isLoadingSlice = (state = false, action) => {
  switch (action.type) {
    case actions.productsRequest().type:
      return true

    case actions.productsSuccess().type:
    case actions.productsFailure().type:
      return false

    default:
      return state
  }
}

export const metaSlice = combineReducers({
  isLoading: isLoadingSlice
})
