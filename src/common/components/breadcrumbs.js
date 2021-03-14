import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  padding: 8px;
`

const Item = styled.li`
  padding: 4px;
  &:after {
    content: '/';
    margin-left: 4px;
  }
`

const mock = Array(5).fill('Crumb')

const Breadcrumbs = () =>
  <List>
    {mock.map((crumb, key) => <Item key={key}>{crumb}</Item>)}
  </List>

export default Breadcrumbs
