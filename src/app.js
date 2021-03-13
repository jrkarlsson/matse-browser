import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { hsla, SAND, SNOW } from './styling/colors'
import Categories from './pages/category-browser/category-browser'

const Bar = styled.div`
  height: 64px;
  background: ${hsla(SAND)};
  color: ${hsla(SNOW)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`

const Main = styled.main`
`

const App = () => {
  return (
    <BrowserRouter>
      <Bar>Browse | Stats</Bar>
      <Main>
        <Switch>
          <Route path='/:id' component={Categories} />
          <Route component={Categories} />
        </Switch>
      </Main>
    </BrowserRouter>
  )
}

export default App
