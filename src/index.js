import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import GlobalStyle from './styles/global'
import RootContext from './RootContext'

render(
  <RootContext>
    <Router>
      <App />
    </Router>
    <GlobalStyle />
  </RootContext>,
  document.getElementById('app')
)
