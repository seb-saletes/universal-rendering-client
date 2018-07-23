import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { findIndex as _findIndex } from 'lodash'

import GET_LISTS from '../../_queries/lists.gql'
import CREATE_CARD from './_createCard.gql'

import EditableCard from '../../EditableCard/EditableCard'

class NewCard extends React.Component {
  submit = (createCard) => {
    createCard({ variables: { listId: this.props.list._id, title: this.editableCardRef.getValue() } })
  }

  update = (cache, { data: { createCard } }) => {
    const { lists } = cache.readQuery({ query: GET_LISTS })

    const idx = _findIndex(lists, ['_id', createCard.listId])
    lists[idx].cards.push(createCard)

    cache.writeQuery({
      query: GET_LISTS,
      data: { lists },
    })
    this.props.hideNewCard()
  }

  handleRef = (ref) => {
    this.editableCardRef = ref ? ref.getInstance() : ref
  }

  render() {
    return (
      <Mutation mutation={CREATE_CARD} update={this.update}>
        {createCard => (
          <EditableCard
            ref={this.handleRef}
            list={this.props.list}
            buttonText="Add card"
            onClick={() => this.submit(createCard)}
            onClickOutside={this.props.hideNewCard}
          />
        )}
      </Mutation>
    )
  }
}

NewCard.propTypes = {
  list: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
  }).isRequired,
  hideNewCard: PropTypes.func.isRequired,
}

export default NewCard
