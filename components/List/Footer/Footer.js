import React from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'

import { targetSpec, targetCollect } from './DndTarget'


import { ListFooter } from './__style'

class Footer extends React.Component {
  getBoundingClientRect = () => this.node.getBoundingClientRect()

  render() {
    const { connectDropTarget } = this.props

    return (
      connectDropTarget(
        <div
          style={{ padding: 0 }}
          ref={(ref) => {
            this.node = ref
          }}
        >
          <ListFooter isAddingCard={this.props.isAddingCard} onClick={this.props.onClick}>
            + Add another card
          </ListFooter>
        </div>,
      )
    )
  }
}

Footer.propTypes = {
  isAddingCard: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
}

export default DropTarget('CARD', targetSpec, targetCollect)(Footer)
