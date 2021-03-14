import styled from 'styled-components'

import { hsla, SAND, COAL } from '../styling/colors'

export const Container = styled.div` // Break out into generic grid
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
`

export const Item = styled.div` // Break out into generic grid cell
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50% 15% 35%;
  justify-items: center;
  border: 1px solid ${hsla(SAND)};
  border-radius: 2px;
  height: 150px;
  margin: 0 8px;

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

export const Grid = ({ children }) => <Container>{children}</Container>

export const GridCell = ({ title, children, as: tag, image, ...rest }) => (
  <Item as={tag} {...rest}>
    <div>{image ? <img src={image} /> : 'No Image'}</div>
    <h1>{title}</h1>
    <p>{children}</p>
  </Item>
)
