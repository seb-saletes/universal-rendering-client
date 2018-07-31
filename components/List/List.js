import React from 'react'
import PropTypes from 'prop-types'
import { withApollo } from 'react-apollo'
import { remove as _remove } from 'lodash'

import { ListContainer, ListContent } from './__style'

import fragment from '../_fragments/list.gql'
import mutation from './_moveCard.gql'

import Header from './Header/Header'
import CardsList from './CardsList'
import Footer from './Footer/Footer'

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
      <ListContainer>
        <ListContent>
          <Header list={list} />

          <CardsList
            list={list}
            cardsFilter={cardsFilter}
            isAddingCard={this.state.isAddingCard}
            hideNewCard={this.hideNewCard}
            orderCard={this.orderCard}
            moveCard={this.moveCard}
            mutateMovement={this.mutateMovement}
          />

          <Footer
            list={list}
            isAddingCard={this.state.isAddingCard}
            onClick={this.displayNewCard}
            moveCard={this.moveCard}
          />
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
  client: PropTypes.object.isRequired,
  cardsFilter: PropTypes.string.isRequired,
}

export default withApollo(List)
