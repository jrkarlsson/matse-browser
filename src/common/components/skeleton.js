import styled from 'styled-components'

import { CONCRETE, hsla, SNOW } from '../styling/colors'

export const Container = styled.span`
  display: inline-flex;
  background: ${props => props.darker ? hsla(CONCRETE) : hsla(SNOW)};
  width: ${props => props.width};
  height: ${props => props.height};
`
const Skeleton = ({ width = '100%', height = '1em', darker = false }) => <Container darker={darker} width={width} height={height} />

export default Skeleton
