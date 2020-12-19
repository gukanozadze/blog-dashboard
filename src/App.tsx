import React from "react"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import { useSelector } from "react-redux"
import styled from "styled-components"
import { AppState } from "./store/configureStore"
import { User } from "./types/User"

import Navbar from "./layouts/Navbar"

// Components
import Login from "./components/Login"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard/Dashboard"
import Settings from "./components/Settings"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App: React.FC = () => {
  const user = useSelector<AppState, User>((state) => state.user.data)

  if (!user.id) {
    return <Login />
  }

  return (
    <Wrapper>
      <Router>
        <Switch>
          <React.Fragment>
            <div>
              <Header />
            </div>

            <Route exact path={["/", "/dashboard"]}>
              <Navbar>
                <Dashboard />
              </Navbar>
            </Route>

            <Route exact path="/Settings">
              <Navbar>
                <Settings />
              </Navbar>
            </Route>
          </React.Fragment>
        </Switch>
      </Router>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* margin-top: 100px; */
`

export default App
