import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { findIndex as _findIndex } from 'lodash'

import GET_LISTS from '../_queries/lists.gql'
import UPDATE_CARD from './_updateCard.gql'

import EditableCard from '../EditableCard/EditableCard'

class Card extends React.Component {
  submit = (updateCard) => {
    updateCard({
      variables: {
        listId: this.props.card.listId,
        cardId: this.props.card._id,
        title: this.editableCardRef.state.value,
      },
    })
  }

  update = (cache, { data: { updateCard } }) => {
    const { lists } = cache.readQuery({ query: GET_LISTS })
    const idxList = _findIndex(lists, ['_id', updateCard.listId])
    const idxCard = _findIndex(lists[idxList].cards, ['_id', updateCard._id])
    lists[idxList].cards[idxCard].title = updateCard.title

    cache.writeQuery({
      query: GET_LISTS,
      data: { lists },
    })

    this.props.editModeOff()
  }

  handleRef = (ref) => {
    this.editableCardRef = ref ? ref.getInstance() : ref
  }

  render() {
    return (
      <Mutation mutation={UPDATE_CARD} update={this.update}>
        {updateCard => (
          <EditableCard
            ref={this.handleRef}
            initialValue={this.props.card.title}
            buttonText="Update card"
            onClick={() => this.submit(updateCard)}
            onClickOutside={this.props.editModeOff}
          />
        )}
      </Mutation>
    )
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  editModeOff: PropTypes.func.isRequired,
}

export default Card
