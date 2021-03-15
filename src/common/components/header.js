import styled from 'styled-components'

import { responsive } from '../styling/responsive'

export const H1 = styled.h1` // Break out into generic grid
  font-size: 28px;
  margin-bottom: 32px;
  font-weight: bold;

  ${responsive.desktop`
    font-size: 34px;
  `}
`
