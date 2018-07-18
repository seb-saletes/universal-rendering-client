import React from 'react'

import { Container, Textarea } from './__styles'

import AddButton from '../AddButton/AddButton'

class CreateCard extends React.Component {
  componentDidMount() {
    if (this.props.initialValue) {
      this.inputNode.value = this.props.initialValue
    }
  }

  getValue = () => this.inputNode.value

  render() {
    return (
      <Container>
        <Textarea
          innerRef={(ref) => {
            this.inputNode = ref
          }}
          type="text"
          placeholder="Enter a title for this card..."
        />
        <AddButton onClick={this.props.onClick}>{this.props.buttonText}</AddButton>
      </Container>

    )
  }
}

export default CreateCard
