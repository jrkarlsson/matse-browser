import axios from 'axios'

export const getCategories = () => {
  return axios.get('/category-tree-mock.json')
}

export const getProductsByCategoryId = (id) => {
  return axios.get(`/products-${id}-mock.json`)
}
