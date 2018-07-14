import React from 'react'
import { Navbar, Item, SearchbBar } from './_style'

const NavbarComponent = () => (
  <Navbar>
    <Item>Logout</Item>
    <SearchbBar placeholder="Search cards" />
  </Navbar>
)

export default NavbarComponent
