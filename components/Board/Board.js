import React from 'react'
import { Query } from 'react-apollo'

import { Container } from './_style'

import GET_LISTS from '../_queries/lists.gql'

import List from '../List/List'
import CreateList from '../CreateList/CreateList'

const Board = () => {


  return (
    <Query query={GET_LISTS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        return (
          <Container>
            {data.lists.map(list => <List key={list._id} list={list} />)}
            <CreateList />
          </Container>
        )
      }}
    </Query>
  )
}

export default Board
