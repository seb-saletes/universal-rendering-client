import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import { ListsContainer } from './__style'

import GET_LISTS from '../_queries/lists.gql'

import List from '../List/List'
import CreateList from '../CreateList/CreateList'

const Board = (props) => (
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


export default Board
