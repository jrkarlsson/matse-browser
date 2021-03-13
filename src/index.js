import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { Provider } from 'react-redux'

import App from './app'
import { hsla, CONCRETE, COAL } from './styling/colors'
import createStore from './common/logic/store'

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: ${hsla(CONCRETE)};
    color: ${hsla(COAL)};
    font-family: 'Lato', 'sans-serif';
  }
`

const store = createStore()

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
