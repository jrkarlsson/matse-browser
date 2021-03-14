import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { categoryById, childCategoriesById, isCategoryLoading } from '../../common/logic/categories/selectors'
import { Grid, GridCell } from '../../common/components/grid'
import { navigateRequest } from './logic/actions'
import { percentageByOriginAndCategoryId, topFiveSold } from './logic/selectors'
import TopFiveProductsGrid from './top-five-products'
import { isProductsLoading } from '../../common/logic/products/selectors'

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
    dispatch(navigateRequest(match.params.id))
  }, [dispatch, match])

  const isLoading = useSelector(isCategoryLoading)
  const currentCategory = useSelector(state => categoryById(state, match.params.id))
  const subCategories = useSelector(state => childCategoriesById(state, match.params.id))
  const topFiveProducts = useSelector(state => topFiveSold(state, match.params.id))
  const _isProductsLoading = useSelector(isProductsLoading)
  const percentSwedish = useSelector(state => percentageByOriginAndCategoryId(state, match.params.id, 'SE'))



  return (
    <div>
      {isLoading
        ? 'Loading...'
        : <Category {...currentCategory} />}

      {_isProductsLoading
        ? 'Loadings...'
        : `Andel svenska produkter: ${percentSwedish * 100}%`}

      {_isProductsLoading
        ? 'Loading...'
        : (
          <TopFiveProductsGrid>
            {topFiveProducts.map((product, key) => <GridCell key={key} title={product.name} image={product.imageUrl}>({product.soldCount})</GridCell>)}
          </TopFiveProductsGrid>
          )}

      {isLoading
        ? 'Loading...'
        : (
          <Grid>
            {subCategories.map((category, key) => <GridCell key={key} as={Link} to={`/${category.id}`} title={category.name}>({category.count})</GridCell>)}
          </Grid>
          )}
    </div>
  )
}

export default Categories
