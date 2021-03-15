import styled from 'styled-components'

import { hsla, WHITE, COAL, SNOW, ASH } from '../styling/colors'
import { responsive } from '../styling/responsive'
import Skeleton from './skeleton'

export const Container = styled.div` // Break out into generic grid
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr;

  ${responsive.desktop`
    grid-gap: 16px;
    grid-template-columns: repeat(5, 1fr);
  `}
`

export const Item = styled.div` // Break out into generic grid cell
  display: grid;
  grid-template-columns: 48px auto 25%;
  grid-template-rows: 48px;
  grid-gap: 8px;
  align-items: center;
  border-radius: 6px;
  padding: 16px;
  overflow: hidden;
  background: ${hsla(WHITE)};
  text-decoration: none;
  box-shadow: 0 3px 5px ${hsla(COAL, 0.1)};
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;

  transition: box-shadow .1s ease-out, transform .1s ease-out;

  ${responsive.desktop`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto auto;
    grid-gap: 4px;
    justify-items: center;
    height: 200px;
  `}

  &:hover {
    box-shadow: 0 5px 10px ${hsla(COAL, 0.2)};
    transform: translateY(-1%);
    transform-origin: bottom center;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Figure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 48px;


  ${responsive.desktop`
    width: 100%;
    height: 100%;
    margin: -16px;
  `}

  > img, svg {
    max-width: 150px;
    color: ${hsla(SNOW)};
    width: auto;

    ${responsive.desktop`
      width: 50%;
      height: auto;
    `}
  }

  
`

const Header = styled.h1`
  font-size: 18px;
  width: 100%;
  font-weight: bold;
  color: ${hsla(COAL)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;

  ${responsive.desktop`
    font-size: 22px;
    text-align: center;
  `}
`

const Body = styled.p`
  width: 100%;
  color: ${hsla(ASH)};
  font-size: 14px;
  font-weight: bold;
  text-align: right;

  ${responsive.desktop`
    text-align: center;
    font-size: 16px;
  `}
`

export const Grid = ({ children }) => <Container>{children}</Container>

export const GridCell = ({ header, children, as: tag, figure, ...rest }) => (
  <Item as={tag} {...rest}>
    <Figure>{figure}</Figure>
    <Header>{header}</Header>
    <Body>{children}</Body>
  </Item>
)

export const GridCellSkeleton = () => (
  <GridCell
    header={<Skeleton height='1em' />}
    figure={<Skeleton width='128px' height='128px' />}
  >
    <Skeleton height='1em' />
  </GridCell>
)
