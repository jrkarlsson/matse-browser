import styled from 'styled-components'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'

import { COAL, hsla, SUNBURST, WHITE } from './common/styling/colors'
import Categories from './pages/category-browser/category-browser'

const TopBar = styled.div`
  height: 64px;
  background: ${hsla(SUNBURST)};
  color: ${hsla(WHITE)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  box-shadow: 0 5px 10px ${hsla(COAL, 0.2)};
`

const Logo = styled.div`
  width: 125px;
  height: 33px;
  background-image: url('https://www.mat.se/images/categ-spritesheet__v1615298468684.png');
  background-position: -2px -417px;
  background-repeat: no-repeat;
  cursor: pointer;
`

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 64px;

  > * {
    max-width: 1180px;
  }

`

const Brand = () => {
  const history = useHistory()

  return <Logo onClick={() => history.push('/')} />
}

const App = () => (
  <BrowserRouter>
    <TopBar><Brand /></TopBar>
    <Main>
      <Switch>
        <Route path='/:id' component={Categories} />
        <Route component={Categories} />
      </Switch>
    </Main>
  </BrowserRouter>
)

export default App
