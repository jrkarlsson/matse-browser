import styled from 'styled-components'

import { hsla, WHITE, COAL, SNOW, ASH } from '../styling/colors'

export const Container = styled.div` // Break out into generic grid
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
`

export const Item = styled.div` // Break out into generic grid cell
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto auto;
  grid-gap: 4px;
  justify-items: center;
  border-radius: 6px;
  height: 200px;
  padding: 16px;
  overflow: hidden;
  background: ${hsla(WHITE)};
  text-decoration: none;
  box-shadow: 0 3px 5px ${hsla(COAL, 0.1)};
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;

  transition: box-shadow .1s ease-out, transform .1s ease-out;

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
  align-self: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: -16px;


  > img, svg {
    width: 50%;
    max-width: 150px;
    height: auto;
    color: ${hsla(SNOW)};
  }
`

const Header = styled.h1`
  font-size: 22px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: ${hsla(COAL)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Body = styled.p`
  width: 100%;
  color: ${hsla(ASH)};
  font-weight: bold;
  text-align: center;
`

export const Grid = ({ children }) => <Container>{children}</Container>

export const GridCell = ({ header, children, as: tag, figure, ...rest }) => (
  <Item as={tag} {...rest}>
    <Figure>{figure}</Figure>
    <Header>{header}</Header>
    <Body>{children}</Body>
  </Item>
)
