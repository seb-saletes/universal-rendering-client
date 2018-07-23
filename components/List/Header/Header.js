import React from 'react'
import PropTypes from 'prop-types'

import { Header } from './__style'

import DeleteButton from './DeleteButton'

const ListHeader = ({ list }) => (
  <Header>
    {list.title}
    <DeleteButton list={list} />
  </Header>
)

ListHeader.propTypes = {
  list: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
  }).isRequired,
}

export default ListHeader
