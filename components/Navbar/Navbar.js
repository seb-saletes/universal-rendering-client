import React from 'react'
import styled from 'styled-components'

const Navbar = styled.div`
  border-radius: 3px;
  padding: 10px;
  background: ${({ theme }) => theme.colorPrimary};
  color: white;
`

const NavbarComponent = () => (
  <Navbar>
    <span> TEST </span>
  </Navbar>
)

export default NavbarComponent
