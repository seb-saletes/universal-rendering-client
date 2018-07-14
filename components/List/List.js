import React from 'react'
import PropTypes from 'prop-types'
import { Container, Header, Title, CardContainer } from './_style'
import DeleteButton from './DeleteButton'
import Card from '../Card/Card'
import CreateCard from '../CreateCard/CreateCard'

const List = ({ list, update }) => (
  <Container>
    <Header>
      <Title>{list.title} </Title>
      <DeleteButton list={list} update={update} />
    </Header>
    <CardContainer>
      {list.cards && list.cards.map(card => <Card key={card._id} card={card} />)}
    </CardContainer>
    <CreateCard />
  </Container>
)

List.propTypes = {
  list: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
  }).isRequired,
  update: PropTypes.func.isRequired,
}

export default List
