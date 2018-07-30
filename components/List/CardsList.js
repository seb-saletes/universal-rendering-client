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

  orderCard = (srcIndex, targetIndex, listId) => {
    const srcList = this.props.client.readFragment({ id: `List:${listId}`, fragment, fragmentName: 'ListFragment' })
    const tmp = srcList.cards[srcIndex]

    srcList.cards[srcIndex] = srcList.cards[targetIndex]
    srcList.cards[targetIndex] = tmp

    this.props.client.writeFragment({ id: `List:${listId}`, fragment, fragmentName: 'ListFragment', data: srcList })
  }

  moveCard = (srcIndex, targetIndex, srcListId, targetListId) => {
    const fragmentName = 'ListFragment'

    const srcList = this.props.client.readFragment({ id: `List:${srcListId}`, fragment, fragmentName })
    const targetList = this.props.client.readFragment({ id: `List:${targetListId}`, fragment, fragmentName })

    const srcCard = srcList.cards[srcIndex]

    targetList.cards.splice(targetIndex, 0, { ...srcCard, listId: targetListId })
    _remove(srcList.cards, o => o._id === srcCard._id)

    this.props.client.writeFragment({ id: `List:${targetListId}`, fragment, fragmentName, data: targetList })
    this.props.client.writeFragment({ id: `List:${srcListId}`, fragment, fragmentName, data: srcList })
  }

  mutateMovement = (listId, targetId, cardId, position) => {
    this.props.client.mutate({
      variables: { listId, targetId, cardId, position },
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
              orderCard={this.orderCard}
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
