import React from 'react'
import { Navbar, LogoutButton, SearchbBar } from './_style'

const NavbarComponent = () => (
  <Navbar>
    HKUST Individual Project
    <SearchbBar placeholder="Search cards" />
    <LogoutButton>Logout</LogoutButton>
  </Navbar>
)

export default NavbarComponent
