import * as types from './types'

export const productsRequest = (id) => ({
  type: types.PRODUCTS_REQUEST,
  payload: id
})

export const productsSuccess = (id, data) => ({
  type: types.PRODUCTS_SUCCESS,
  payload: { id, data }
})

export const productsFailure = (error) => ({
  type: types.PRODUCTS_FAILURE,
  payload: error
})
