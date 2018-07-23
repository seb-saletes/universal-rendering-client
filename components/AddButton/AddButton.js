import React from 'react'
import PropTypes from 'prop-types'

import { Container, Button } from './_style'

const AddButton = ({ children, disabled, onClick }) => (
  <Container>
    <Button disabled={disabled} onClick={onClick}>{children}</Button>
  </Container>
)

AddButton.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}
AddButton.defaultProps = {
  disabled: false,
  onClick: () => {},
}

export default AddButton
