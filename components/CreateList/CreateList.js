import React from 'react'
import { Mutation } from 'react-apollo'

import { Container, Input } from './__style'

import GET_LISTS from '../_queries/lists.gql'
import CREATE_LIST from './_createList.gql'

import AddButton from '../AddButton/AddButton'


class CreateList extends React.Component {
  submit = (cb) => {
    cb({ variables: { title: this.inputNode.value } })
    this.inputNode.value = ''
  }

  update = (cache, { data: { createList } }) => {
    const { lists } = cache.readQuery({ query: GET_LISTS })
    cache.writeQuery({
      query: GET_LISTS,
      data: { lists: [...lists, createList] },
    })
  }

  render() {
    return (
      <Mutation mutation={CREATE_LIST} update={this.update}>
        {(createList, { data }) => (
          <Container>
            <Input
              innerRef={(ref) => {
                this.inputNode = ref
              }}
              placeholder="Enter list title..."
            />
            <AddButton onClick={() => this.submit(createList, data)}>Add List</AddButton>
          </Container>
        )}
      </Mutation>
    )
  }
}

export default CreateList
