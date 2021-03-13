import { combineReducers } from 'redux'

import {
  entitiesSlice as categoryEntities,
  metaSlice as categoryMeta
} from '../../pages/category-browser/logic/reducers'

export default combineReducers({
  entities: combineReducers({
    categories: categoryEntities
  }),
  meta: combineReducers({
    categories: categoryMeta
  })
})
