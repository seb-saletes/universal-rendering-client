import React from 'react'
import PropTypes from 'prop-types'
import { withApollo } from 'react-apollo'
import { remove as _remove } from 'lodash'


import fragment from '../_fragments/list.gql'
import mutation from './_moveCard.gql'

import { CardsContainer } from './__style'

import Card from '../Card/Card'
import NewCard from './NewCard/NewCard'

class CardsList extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.isAddingCard && this.props.isAddingCard) {
      this.CardsContainerNode.scrollTop = this.CardsContainerNode.scrollHeight
    }
  }

  moveCard = (dragIndex, dragListId, hoverIndex, hoverListId) => {
    const fragmentName = 'ListFragment'

    const dragList = this.props.client.readFragment({ id: `List:${dragListId}`, fragment, fragmentName })
    const dragCard = dragList.cards[dragIndex]


    if (dragListId === hoverListId) {
      dragList.cards[dragIndex] = dragList.cards[hoverIndex]
      dragList.cards[hoverIndex] = dragCard

      this.props.client.writeFragment({ id: `List:${dragListId}`, fragment, fragmentName, data: dragList })
    } else {
      const hoverList = this.props.client.readFragment({ id: `List:${hoverListId}`, fragment, fragmentName })

      hoverList.cards.splice(hoverIndex, 0, dragCard)
      _remove(dragList.cards, (o, i) => i === dragIndex)

      this.props.client.writeFragment({ id: `List:${hoverListId}`, fragment, fragmentName, data: hoverList })
      this.props.client.writeFragment({ id: `List:${dragListId}`, fragment, fragmentName, data: dragList })
    }
  }

  mutateMovement = (listId, targetId, cardId) => {
    console.log('mutateCalled')

    this.props.client.mutate({
      variables: { listId, targetId, cardId },
      mutation,
    })
  }

  render() {
    const { list, cardsFilter } = this.props

    return (
      <CardsContainer
        innerRef={(ref) => {
          this.CardsContainerNode = ref
        }}
      >
        {list.cards && list.cards.map((card, index) => {
          const matchFilter = !!cardsFilter && card.title.toLowerCase().includes(cardsFilter)

          return (
            <Card
              key={card._id}
              card={card}
              matchFilter={matchFilter}
              moveCard={this.moveCard}
              mutateMovement={this.mutateMovement}
              index={index}
            />
          )
        })}

        {this.props.isAddingCard && <NewCard list={list} hideNewCard={this.props.hideNewCard} />}
      </CardsContainer>
    )
  }
}

CardsList.propTypes = {
  list: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
  }).isRequired,
  cardsFilter: PropTypes.string.isRequired,
  isAddingCard: PropTypes.bool.isRequired,
  hideNewCard: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired,
}

export default withApollo(CardsList)
