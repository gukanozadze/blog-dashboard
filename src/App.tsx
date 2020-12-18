import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import { useSelector } from 'react-redux';
import styled from 'styled-components'

import { AppState } from './store/configureStore';
import { User } from './types/User';
// Components
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App: React.FC = () => {
  const user = useSelector<AppState, User>(state => state.user)

  if (!user.googleId) {
    return <Login />
  }

  return (
    <Wrapper>
      <Router>
        <Switch>

          <Route exact path={["/", "/dashboard"]}>
            <Dashboard />
          </Route>

          <Route exact path="/Settings">
            <Settings />
          </Route>

        </Switch>
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 100px;
`

export default App;
