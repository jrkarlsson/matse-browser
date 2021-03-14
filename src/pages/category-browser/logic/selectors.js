import { productsByCategoryId } from '../../../common/logic/products/selectors'

export const percentageByOriginAndCategoryId = (state, categoryId, origin) => {
  const products = productsByCategoryId(state, categoryId)

  if (!products.length) return 0

  let count = 0

  products.forEach(product => {
    if (product.countryOfOrigin === origin) count++
  })

  return (count / products.length).toPrecision(2)
}

export const topFiveSold = (state, categoryId) => {
  const products = productsByCategoryId(state, categoryId)

  products.sort((a, b) => a.soldCount > b.soldCount ? -1 : a.soldCount < b.soldCount ? 1 : 0)

  return products.slice(0, 5)
}
