import { CATEGORIES_ROOT } from './utils'

export const categoryById = (state, id) => {
  const result = state.entities.categories[id] ||
  state.entities.categories[CATEGORIES_ROOT] ||
  undefined

  return result
}

export const childCategoriesById = (state, id) => {
  const currentCategory = categoryById(state, id)

  return currentCategory
    ? currentCategory.subCategories.map(id => state.entities.categories[id])
    : []
}

export const isCategoryLoading = (state) => state.meta.categories.isLoading
