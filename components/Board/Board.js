import React from 'react'
import PropTypes from 'prop-types'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { Query } from 'react-apollo'

import { ListsContainer } from './__style'

import GET_LISTS from '../_queries/lists.gql'

import List from '../List/List'
import CreateList from '../CreateList/CreateList'

export const ItemTypes = { CARD: 'card' }

const Board = props => (
  <Query query={GET_LISTS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      return (
        <ListsContainer>
          {data.lists.map(list => <List key={list._id} list={list} cardsFilter={props.cardsFilter} />)}
          <CreateList />
        </ListsContainer>
      )
    }}
  </Query>
)

Board.propTypes = { cardsFilter: PropTypes.string.isRequired }


export default DragDropContext(HTML5Backend)(Board)
