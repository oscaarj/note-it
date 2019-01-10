import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import GlobalStyle from './styles/global'

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
    <GlobalStyle />
  </Provider>,
  document.getElementById('app')
)
