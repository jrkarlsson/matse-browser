import { combineReducers } from 'redux'

import * as actions from './actions'

export const entitiesSlice = (state = {}, action) => {
  if (action.type === actions.categoriesSuccess().type) {
    console.log('hit')
    return {
      ...state,
      ...action.payload.entities.categories
    }
  }

  return state
}

const isLoadingSlice = (state = false, action) => {
  switch (action.type) {
    case actions.categoriesRequest().type:
      return true

    case actions.categoriesSuccess().type:
    case actions.categoriesFailure().type:
      return false

    default:
      return state
  }
}

export const metaSlice = combineReducers({
  isLoading: isLoadingSlice
})
