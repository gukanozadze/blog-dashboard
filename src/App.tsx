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
    <Body>
      {!user.googleId
        ? <Login />
        : <Logout />
      }
    </Body>
  );
}

const Body = styled.div`
  background-color: '#FFF8E5';
  display: flex; 
  align-items: center;
  justify-content: center;
`

export default App;
