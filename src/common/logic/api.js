import axios from 'axios'

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export const getCategories = () => {
  return axios.get('/category-tree-mock.json')
    .then(response => new Promise(resolve => {
      setTimeout(() => {
        resolve(response)
      }, 0)
    }))
  // return axios.get('https://mat.se/api/product/getCategoryTree')
}

export const getProductsByCategoryId = (id) => {
  return axios.get(`/products-${id}-mock.json`)
    .then(response => new Promise(resolve => {
      setTimeout(() => {
        resolve(response)
      }, 0)
    }))
  // return axios.get(`https://mat.se/api/product/listByCategory?categoryId=${id}`)
}
