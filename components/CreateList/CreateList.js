import React from 'react'
import { Mutation } from 'react-apollo'

import { Container, Input } from './__style'

import GET_LISTS from '../_queries/lists.gql'
import CREATE_LIST from './_createList.gql'

import AddButton from '../AddButton/AddButton'

class CreateList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  submit = (cb) => {
    cb({ variables: { title: this.state.value } })
    this.state.value = ''
  }

  update = (cache, { data: { createList } }) => {
    const { lists } = cache.readQuery({ query: GET_LISTS })
    cache.writeQuery({
      query: GET_LISTS,
      data: { lists: [...lists, createList] },
    })
  }

  onChange = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <Container>
        <Input value={this.state.value} onChange={this.onChange} placeholder="Enter list title..." />
        <Mutation mutation={CREATE_LIST} update={this.update}>
          {(createList, { data }) => (
            <AddButton
              disabled={!this.state.value}
              onClick={() => this.submit(createList, data)}
            >Add List
            </AddButton>
          )}
        </Mutation>
      </Container>
    )
  }
}

export default CreateList
