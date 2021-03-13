import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { categoriesRequest } from './logic/actions'
import { categoryById, childCategoriesById, isCategoryLoading } from './logic/selectors'

const Category = ({ // Break out "CategoryStats"
  name,
  maxImmediateChildren,
  count,
  ...rest
}) => (
  <dl>
    <dt>Namn:</dt>
    <dd>{name}</dd>
    <dt>Underkategorier:</dt>
    <dd>{maxImmediateChildren}</dd>
    <dt>Antal produkter:</dt>
    <dd>{count}</dd>
  </dl>
)

const Categories = ({ match, ...rest }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(categoriesRequest())
  }, [dispatch])

  const isLoading = useSelector(isCategoryLoading)
  const currentCategory = useSelector(state => categoryById(state, match.params.id))
  const subCategories = useSelector(state => childCategoriesById(state, match.params.id))

  return (
    <div>
      {isLoading
        ? 'Loading...'
        : <Category {...currentCategory} />}

      {isLoading
        ? 'Loading...'
        : <ul>{subCategories.map((category, key) => <li key={key}><Link to={`/${category.id}`}>{category.name}({category.count})</Link></li>)}</ul>} {/* Break out and use generic grid instead */}
    </div>
  )
}

export default Categories
