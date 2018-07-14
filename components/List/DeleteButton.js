import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'

import { DeleteButton } from './_style'
import DELETE_LIST from './deleteList.gql'

const Button = ({ list, update }) => (
  <Mutation
    mutation={DELETE_LIST}
    variables={{ _id: list._id }}
    update={update}
  >
    {(deleteList, { data }) => (
      <DeleteButton onClick={() => deleteList({ variables: { _id: list._id } })}>X</DeleteButton>
    )}
  </Mutation>
)

Button.propTypes = {
  list: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
  }).isRequired,
  update: PropTypes.func.isRequired,
}

export default Button
