import React from 'react'
import { Mutation } from 'react-apollo'

import { Container, Input, ButtonsContainer, AddButton } from './_style'
import CREATE_LIST from './createList.gql'


class Dashboard extends React.Component {
  submit = (cb) => {
    cb({ variables: { title: this.inputNode.value } })
    this.inputNode.value = ''
  }

  render() {
    const { update } = this.props

    return (
      <Mutation mutation={CREATE_LIST} update={update}>
        {(createList, { data }) => (
          <Container>
            <Input
              innerRef={(ref) => {
                this.inputNode = ref
              }}
              placeholder="Enter list title..."
            />
            <ButtonsContainer>
              <AddButton onClick={() => this.submit(createList, data)}>
                  Add List
              </AddButton>
            </ButtonsContainer>
          </Container>
        )}
      </Mutation>
    )
  }
}

export default Dashboard
