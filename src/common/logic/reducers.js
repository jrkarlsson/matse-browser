import { combineReducers } from 'redux'

import {
  entitiesSlice as categoryEntities,
  metaSlice as categoryMeta
} from './categories/reducers'
import {
  productsEntitiesSlice,
  productsByCategoryIdSlice,
  metaSlice as productMeta
} from './products/reducers'

export default combineReducers({
  entities: combineReducers({
    categories: categoryEntities,
    products: productsEntitiesSlice,
    productsByCategoryId: productsByCategoryIdSlice
  }),
  meta: combineReducers({
    categories: categoryMeta,
    products: productMeta
  })
})
