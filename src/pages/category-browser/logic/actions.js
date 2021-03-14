import * as types from './types'

export const navigateRequest = (id) => ({
  type: types.NAVIGATE_REQUEST,
  payload: id
})

export const navigateSuccess = (id) => ({
  type: types.NAVIGATE_SUCCESS,
  payload: id
})

export const navigateFailure = (id, error) => ({
  type: types.NAVIGATE_FAILURE,
  payload: error
})
