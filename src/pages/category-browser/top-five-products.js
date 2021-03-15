import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Container, GridCell } from '../../common/components/grid'
import { H1 } from '../../common/components/header'
import Skeleton from '../../common/components/skeleton'
import { isProductsLoading } from '../../common/logic/products/selectors'
import { topFiveSold } from './logic/selectors'

const Grid = styled(Container)`
  grid-template-columns: repeat(5, 1fr);
`

const buildCells = (isLoading, products) => {
  if (isLoading) {
    const cells = []

    for (let i = 0; i < 5; i++) {
      cells.push(
        <GridCell
          key={i}
          header={<Skeleton height='100%' />}
          figure={<Skeleton width='128px' height='128px' />}
        >
          <Skeleton height='100%' />
        </GridCell>
      )
    }

    return cells
  }

  return products.map((product, key) =>
    <GridCell
      key={key}
      header={product.name}
      figure={<img src={product.imageUrl} alt={product.name} />}
    >
      ({product.soldCount})
    </GridCell>
  )
}

const TopFiveProducts = ({ categoryId }) => {
  const topFiveProducts = useSelector(state => topFiveSold(state, categoryId))
  const isLoading = useSelector(isProductsLoading)

  return (
    <div>
      <H1>Populära produkter</H1>
      <Grid>
        {buildCells(isLoading, topFiveProducts)}
      </Grid>
    </div>
  )
}

export default TopFiveProducts
