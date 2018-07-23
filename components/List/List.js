import React from 'react'
import PropTypes from 'prop-types'

import { ListContainer, ListContent, CardsContainer, ListFooter } from './__style'

import Header from './Header/Header'
import CardsList from './CardsList'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isAddingCard: false }
  }

  displayNewCard = () => {
    this.setState({ isAddingCard: true })
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

          <CardsList
            list={list}
            cardsFilter={cardsFilter}
            isAddingCard={this.state.isAddingCard}
            hideNewCard={this.hideNewCard}
          />

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
