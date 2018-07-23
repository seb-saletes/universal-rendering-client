import React from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'

import { Textarea } from './__styles'

import AddButton from '../AddButton/AddButton'

class EditableCard extends React.Component {
  componentDidMount() {
    this.inputNode.value = this.props.initialValue
  }

  handleClickOutside = () => {
    this.props.onClickOutside()
  }

  getValue = () => this.inputNode.value

  render() {
    return (
      <div>
        <Textarea
          innerRef={(ref) => {
            this.inputNode = ref
          }}
          type="text"
          placeholder="Enter a title for this card..."
        />
        <AddButton onClick={this.props.onClick}>{this.props.buttonText}</AddButton>
      </div>
    )
  }
}

EditableCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClickOutside: PropTypes.func,
  initialValue: PropTypes.string,
}

EditableCard.defaultProps = {
  initialValue: '',
  onClickOutside: () => {},
}

export default onClickOutside(EditableCard)
