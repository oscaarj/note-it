import Main from './screens/Main'
import Note from './screens/Note'

const routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: '/:id',
    component: Note
  }
]

export default routes
