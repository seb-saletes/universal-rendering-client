import React from 'react'
import PropTypes from 'prop-types'
import { debounce as _debounce } from 'lodash'
import cookiesBrowser from 'browser-cookies'
import Router from 'next/router'
import { Query } from 'react-apollo'
import GET_CURRENT_USER from '../_queries/currentUser.gql'

import { Container, LogoutButton, SearchbBar } from './__style'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.onSearch = _debounce(props.onSearch, 200)
  }

  onLogout = () => {
    cookiesBrowser.erase('authToken')
    Router.push('/login')
  }


  render() {
    return (
      <Query query={GET_CURRENT_USER}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`

          return (
            <Container>
              <div>{`Welcome ${data.currentUser.username}`}</div>
              <SearchbBar
                onChange={e => this.onSearch(e.target.value)}
                placeholder="Search cards"
              />
              <LogoutButton onClick={this.onLogout}>Logout</LogoutButton>
            </Container>
          )
        }}
      </Query>

    )
  }
}

Navbar.propTypes = { onSearch: PropTypes.func.isRequired }

export default Navbar
