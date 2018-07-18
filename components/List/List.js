import React from 'react'
import PropTypes from 'prop-types'

import { Container, Header, Title, CardContainer } from './__style'

import DeleteListButton from './DeleteListButton'
import Card from '../Card/Card'
import CreateCard from './CreateCardButton'

const List = ({ list }) => (
  <Container>
    <Header>
      <Title>{list.title} </Title>
      <DeleteListButton list={list} />
    </Header>
    <CardContainer>
      {list.cards && list.cards.map(card => <Card key={card._id} card={card} />)}
    </CardContainer>
    <CreateCard list={list} />
  </Container>
)

List.propTypes = {
  list: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
  }).isRequired,
}

export default List
