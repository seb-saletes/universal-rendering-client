import React from 'react'
import PropTypes from 'prop-types'
import { debounce as _debounce } from 'lodash'

import { Container, LogoutButton, SearchbBar } from './__style'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.onSearch = _debounce(props.onSearch, 200)
  }


  render() {
    return (
      <Container>
        <div>HKUST Individual Project</div>
        <SearchbBar
          onChange={e => this.onSearch(e.target.value)}
          placeholder="Search cards"
        />
        <LogoutButton>Logout</LogoutButton>
      </Container>
    )
  }
}

Navbar.propTypes = { onSearch: PropTypes.func.isRequired }

export default Navbar
