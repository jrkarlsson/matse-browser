export const productsByCategoryId = (state, categoryId) => {
  const productsByCategoryId = state.entities.productsByCategoryId[categoryId]

  return productsByCategoryId
    ? productsByCategoryId.map(productId => state.entities.products[productId])
    : []
}

export const isProductsLoading = (state) => state.meta.products.isLoading
