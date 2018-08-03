import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import routes from './routes'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import breakpoints from './styles/breakpoints'

const NoteItContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 250px) minmax(300px, 1fr);
  grid-template-rows: 1fr auto;
  grid-gap: 0 50px;
  height: 100vh;

  @media (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
  }
`

const App = () => {
  return (
    <NoteItContainer>
      <Sidebar />

      <Switch>
        {routes.map(({ path, exact, component: Component, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={props => <Component {...props} {...rest} />}
          />
        ))}
      </Switch>

      <Footer />
    </NoteItContainer>
  )
}

export default App
