import React from 'react'
import PropTypes from 'prop-types'
import { DragSource, DropTarget } from 'react-dnd'

import { targetSpec, targetCollect } from './DndTarget'
import { sourceSpec, sourceCollect } from './DndSource'

import { CardContainer, Icon } from './__style'

import DeleteButton from './DeleteButton'
import CardEditing from './CardEditing'


class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editMode: false }
  }

  getBoundingClientRect = () => this.node.getBoundingClientRect()

  editModeOn = () => this.setState({ editMode: true })

  editModeOff = () => this.setState({ editMode: false })

  render() {
    const { card, matchFilter, connectDragSource, isDragging, connectDropTarget } = this.props

    return (
      <React.Fragment>
        {connectDragSource(
          connectDropTarget(
            <div
              ref={(ref) => {
                this.node = ref
              }}
            >
              <CardContainer matchFilter={matchFilter} editMode={this.state.editMode} isDragging={isDragging}>
                {card.title}
                <div>
                  <Icon onClick={this.editModeOn} name="fas fa-pen" />
                  <DeleteButton card={card} />
                </div>
              </CardContainer>
            </div>,
          ),
        )}
        {this.state.editMode && <CardEditing card={card} editModeOff={this.editModeOff} />}
      </React.Fragment>
    )
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  matchFilter: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
}

export default DragSource('CARD', sourceSpec, sourceCollect)(DropTarget('CARD', targetSpec, targetCollect)(Card))
