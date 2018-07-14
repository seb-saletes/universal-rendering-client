import React from 'react'
import { Query } from 'react-apollo'
import { remove as _remove } from 'lodash'

import { Container } from './_style'
import GET_LISTS from './lists.gql'
import List from '../List/List'
import CreateList from '../CreateList/CreateList'

const Board = () => {
  const creationUpdate = (cache, { data: { createList } }) => {
    const { lists } = cache.readQuery({ query: GET_LISTS })
    cache.writeQuery({
      query: GET_LISTS,
      data: { lists: [...lists, createList] },
    })
  }

  const deletionUpdate = (cache, { data: { deleteList }, ...data }) => {
    const { lists } = cache.readQuery({ query: GET_LISTS })

    _remove(lists, { _id: deleteList._id })

    cache.writeQuery({
      query: GET_LISTS,
      data: { lists },
    })
  }

  return (
    <Query query={GET_LISTS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        return (
          <Container>
            {data.lists.map(list => <List key={list._id} list={list} update={deletionUpdate} />)}
            <CreateList update={creationUpdate} />
          </Container>
        )
      }}
    </Query>
  )
}

export default Board
