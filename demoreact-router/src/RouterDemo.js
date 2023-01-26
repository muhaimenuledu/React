import React from 'react'
import {BrowserRouter as Router,Switch,Link, Route} from 'react-router-dom'

import About from './About'
import Home from './Home'
import Users from './Users'

const RouterDemo = () => {
  return (
    <div>
      <Router>
        <Link to = "/home">Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/users">Users</Link>

        <Switch>

            <Route path="/home">
                    <Home/>
            </Route>

            <Route path="/about">
                <About/>
            </Route>

            <Route path="/users">
                <Users/>
            </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default RouterDemo
