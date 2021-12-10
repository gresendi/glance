import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'

const App = () => {

  return (

    <Router>
      <Switch>
        <Route exact path='/home' >
          <Home />
        </Route>

      </Switch>
      <Switch>
        <Route exact path='/' >
          <Home />
        </Route>

      </Switch>
    </Router>

  )
}

export default App
