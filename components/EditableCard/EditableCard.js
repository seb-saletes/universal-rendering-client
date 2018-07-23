import React from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'

import { Container, Textarea } from './__styles'

import AddButton from '../AddButton/AddButton'

class EditableCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: props.initialValue }
  }

  handleClickOutside = () => this.props.onClickOutside()

  onChange = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <Container>
        <Textarea
          value={this.state.value}
          onChange={this.onChange}
          type="text"
          placeholder="Enter a title for this card..."
        />
        <AddButton disabled={!this.state.value} onClick={this.props.onClick}>{this.props.buttonText}</AddButton>
      </Container>
    )
  }
}

EditableCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClickOutside: PropTypes.func.isRequired,
  initialValue: PropTypes.string,
}

EditableCard.defaultProps = { initialValue: '' }

export default onClickOutside(EditableCard)
