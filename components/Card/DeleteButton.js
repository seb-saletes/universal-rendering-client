import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { findIndex as _findIndex, remove as _remove } from 'lodash'


import GET_LISTS from '../_queries/lists.gql'
import DELETE_CARD from './_deleteCard.gql'

import { Icon } from './__style'

class Card extends React.Component {
  update = (cache, { data: { deleteCard } }) => {
    const { lists } = cache.readQuery({ query: GET_LISTS })
    const idx = _findIndex(lists, ['_id', deleteCard.listId])

    _remove(lists[idx].cards, ['_id', deleteCard._id])

    cache.writeQuery({
      query: GET_LISTS,
      data: { lists },
    })
  }

  render() {
    return (
      <Mutation
        mutation={DELETE_CARD}
        update={this.update}
        optimisticResponse={{
          __typename: 'Mutation',
          deleteCard: { ...this.props.card },
        }}
      >
        {deleteCard => (
          <Icon
            onClick={() => deleteCard({ variables: { listId: this.props.card.listId, cardId: this.props.card._id } })}
            name="fas fa-times"
          />
        )}
      </Mutation>
    )
  }
}

Card.propTypes = { card: PropTypes.object.isRequired }

export default Card
