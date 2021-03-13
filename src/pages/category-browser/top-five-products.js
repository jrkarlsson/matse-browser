import styled from 'styled-components'

import { hsla, SAND, COAL } from '../../styling/colors'

const List = styled.ul` // Break out into generic grid
  display: flex;
  flex-wrap: nowrap;
  padding: 8px;
`

const Item = styled.li` // Break out into generic grid cell
  flex: 1 1 20%;
  border: 1px solid ${hsla(SAND)};
  border-radius: 2px;
  height: 150px;
  margin: 0 8px;

  transition: box-shadow .15s ease-out, transform .15s ease-out;

  &:hover {
    box-shadow: 0 5px 10px ${hsla(COAL, 0.2)};
    transform: scale(1.02);
    transform-origin: bottom center;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const mock = Array(5).fill('')

const TopFive = () => (
  <List>
    {mock.map((item, key) => <Item key={key}>{item}</Item>)}
  </List>
)

export default TopFive
