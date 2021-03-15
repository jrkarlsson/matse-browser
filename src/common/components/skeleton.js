import styled from 'styled-components'

import { hsla, SNOW } from '../styling/colors'

export const Container = styled.span` // Break out into generic grid
  display: inline-flex;
  background: ${hsla(SNOW)};
  width: ${props => props.width};
  height: ${props => props.height};
`
const Skeleton = ({ width = '100%', height = '100%' }) => <Container width={width} height={height} />

export default Skeleton
