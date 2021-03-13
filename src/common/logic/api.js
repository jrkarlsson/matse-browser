import axios from 'axios'

const getCategories = () => {
  return axios.get('/category-tree.json')
}

export default {
  getCategories
}
