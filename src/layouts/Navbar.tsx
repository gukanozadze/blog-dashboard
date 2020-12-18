import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

interface IProps {
  children: ReactNode
}

const NavbarLayout = ({ children }: IProps) => {
  const location = useLocation();

  const pathname = location.pathname;
  return (
    <Layout>
      <NavbarWrapper>
        <StyledLink active={pathname === '/dashboard' || pathname === '/'} to='/dashboard'>
          Dashboard
        </StyledLink>

        <StyledLink active={pathname === '/settings'} to='/settings'>
          Settings
        </StyledLink>


      </NavbarWrapper>

      <ChildrenDOM>
        {children}
      </ChildrenDOM>
    </Layout>

  )
}
const Layout = styled.div`
  display: flex;
`

const StyledLink = styled(Link) <{ active: boolean }>`
  text-decoration: none;
  display: block;
  border: 1px solid #00BFFF;
  border-radius: 5px;
  padding: 10px 35px;
  text-align: center;
  margin-bottom: 15px;
  transition: all .5s ease;
  
  color: ${props => props.active ? 'white' : '#00BFFF'};
  background: ${props => props.active ? '#00BFFF' : 'white'};

  &:hover{
    color: white;
    background: #00BFFF
  }
`
const NavbarWrapper = styled.div`
height: 100vh;
padding: 30px 20px;
background: white;

`

const ChildrenDOM = styled.div`
padding: 40px;
`
export default NavbarLayout