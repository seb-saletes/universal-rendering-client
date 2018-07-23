import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './__style'

import DeleteButton from './DeleteButton'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { list } = this.props

    return (
      <Container>
        {list.title}
        <DeleteButton list={list} />
      </Container>
    )
  }
}

Header.propTypes = {
  list: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
  }).isRequired,
}

export default Header
