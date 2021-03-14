import styled from 'styled-components'

import { Container as GridContainer } from '../../common/components/grid'

const Container = styled(GridContainer)`
  grid-template-columns: repeat(5, 1fr);
`

const Grid = ({ children }) => (
  <Container>
    {children}
  </Container>
)

export default Grid
