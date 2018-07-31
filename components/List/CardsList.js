import React from 'react'
import PropTypes from 'prop-types'
import { withApollo } from 'react-apollo'
import { remove as _remove } from 'lodash'

import { CardsContainer } from './__style'

import Card from '../Card/Card'
import NewCard from './NewCard/NewCard'

class CardsList extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.isAddingCard && this.props.isAddingCard) {
      this.CardsContainerNode.scrollTop = this.CardsContainerNode.scrollHeight
    }
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
              orderCard={this.props.orderCard}
              moveCard={this.props.moveCard}
              mutateMovement={this.props.mutateMovement}
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
  orderCard: PropTypes.func.isRequired,
  moveCard: PropTypes.func.isRequired,
  mutateMovement: PropTypes.func.isRequired,
}

export default CardsList
