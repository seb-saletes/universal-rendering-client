import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { remove as _remove } from 'lodash'

import { DeleteButton } from './__style'

import GET_LISTS from '../_queries/lists.gql'
import DELETE_LIST from './_deleteList.gql'

class Button extends React.Component {
  update = (cache, { data: { deleteList }, ...data }) => {
    const { lists } = cache.readQuery({ query: GET_LISTS })

    _remove(lists, { _id: deleteList._id })

    cache.writeQuery({
      query: GET_LISTS,
      data: { lists },
    })
  }

  render() {
    return (
      <Mutation
        mutation={DELETE_LIST}
        variables={{ _id: this.props.list._id }}
        update={this.update}
      >
        {(deleteList, { data }) => (
          <DeleteButton onClick={() => deleteList({ variables: { _id: this.props.list._id } })}>X</DeleteButton>
        )}
      </Mutation>
    )
  }
}

Button.propTypes = {
  list: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
  }).isRequired,
}

export default Button
