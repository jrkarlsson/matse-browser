import { combineReducers } from 'redux'

import * as actions from './actions'

export const entitiesSlice = (state = {}, action) => {
  if (action.type === actions.categoriesSuccess().type) {
    return {
      // ...state, // Due to time constraints I'm just gonna go ahead and replace the state entirely just to be sure the state and backend is in sync
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
