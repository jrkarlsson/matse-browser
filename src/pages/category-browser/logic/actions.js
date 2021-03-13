import * as types from './types'

export const categoriesRequest = () => ({
  type: types.CATEGORIES_REQUEST
})

export const categoriesSuccess = (data) => ({
  type: types.CATEGORIES_SUCCESS,
  payload: data
})

export const categoriesFailure = (error) => ({
  type: types.CATEGORIES_FAILURE,
  payload: error
})
