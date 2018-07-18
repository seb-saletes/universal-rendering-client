import React from 'react'
import PropTypes from 'prop-types'

import { Container, Button } from './_style'

const AddButton = props => (
  <Container>
    <Button onClick={props.onClick}>{props.children}</Button>
  </Container>
)

AddButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}
AddButton.defaultProps = { onClick: () => {} }

export default AddButton
