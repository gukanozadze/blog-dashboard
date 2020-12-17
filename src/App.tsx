import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Login from './components/Login';
import Logout from './components/Logout';
import { AppState } from './store/configureStore';
import { User } from './types/User';

const App: React.FC = () => {
  const user = useSelector<AppState, User>(state => state.user)
  console.log(user)
  return (
    <Wrapper>
      {!user.googleId
        ? <Login />
        : <Logout />
      }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  margin-top: 100px;
`

export default App;
