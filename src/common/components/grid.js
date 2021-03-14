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
  grid-template-rows: 75% 1fr 1fr;
  justify-items: center;
  border-radius: 6px;
  height: 250px;
  padding: 16px;
  overflow: hidden;
  background: ${hsla(WHITE)};
  text-decoration: none;
  box-shadow: 0 3px 5px ${hsla(COAL, 0.1)};


  transition: box-shadow .15s ease-out, transform .15s ease-out;

  &:hover {
    box-shadow: 0 5px 10px ${hsla(COAL, 0.2)};
    transform: scale(1.01);
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
  /* background: rgb(200,62,112);
  background: linear-gradient(194deg, rgba(200,62,112,1) 0%, rgba(254,129,55,1) 64%, rgba(252,234,156,1) 100%);  */
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
  color: ${hsla(ASH)};
  font-weight: bold;
`

export const Grid = ({ children }) => <Container>{children}</Container>

export const GridCell = ({ header, children, as: tag, figure, ...rest }) => (
  <Item as={tag} {...rest}>
    <Figure>{figure}</Figure>
    <Header>{header}</Header>
    <Body>{children}</Body>
  </Item>
)
