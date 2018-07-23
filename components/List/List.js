import React from 'react'
import PropTypes from 'prop-types'

import { ListContainer, ListContent, CardsContainer, ListFooter } from './__style'

import Header from './Header/Header'
import Card from '../Card/Card'
import NewCard from './NewCard/NewCard'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isAddingCard: false }
  }

  showNewCard = () => {
    this.CardsContainerNode.scrollTop = this.CardsContainerNode.scrollHeight
  }

  displayNewCard = () => {
    this.setState({ isAddingCard: true }, () => this.showNewCard())
  }

  hideNewCard = () => {
    this.setState({ isAddingCard: false })
  }

  render() {
    const { list, cardsFilter } = this.props

    return (
      <ListContainer>
        <ListContent>
          <Header list={list} />

          <CardsContainer
            innerRef={(ref) => {
              this.CardsContainerNode = ref
            }}
          >
            {list.cards && list.cards.map((card) => {
              const matchFilter = !!cardsFilter && card.title.toLowerCase().includes(cardsFilter)

              return <Card key={card._id} card={card} matchFilter={matchFilter} />
            })}

            {this.state.isAddingCard && <NewCard list={list} hideNewCard={this.hideNewCard} />}
          </CardsContainer>

          <ListFooter isAddingCard={this.state.isAddingCard} onClick={this.displayNewCard}>
            + Add another card
          </ListFooter>
        </ListContent>
      </ListContainer>
    )
  }
}

List.propTypes = {
  list: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
  }).isRequired,
  cardsFilter: PropTypes.string.isRequired,
}

export default List
