import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Container, GridCell } from '../../common/components/grid'
import { H1 } from '../../common/components/header'
import { isProductsLoading } from '../../common/logic/products/selectors'
import { topFiveSold } from './logic/selectors'

const Grid = styled(Container)`
  grid-template-columns: repeat(5, 1fr);
`

const TopFiveProducts = ({ categoryId }) => {
  const topFiveProducts = useSelector(state => topFiveSold(state, categoryId))
  const isLoading = useSelector(isProductsLoading)

  return (
    <div>
      <H1>Populära produkter</H1>
      <Grid>
        {isLoading
          ? 'Loading...'
          : topFiveProducts.map((product, key) =>
            <GridCell
              key={key}
              header={product.name}
              figure={<img src={product.imageUrl} alt={product.name} />}
            >
              ({product.soldCount})
            </GridCell>)}
      </Grid>
    </div>
  )
}

export default TopFiveProducts
