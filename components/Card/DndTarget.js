const targetSpec = {
  hover(props, monitor, component) {
    if (!component) {
      return null
    }

    const dragIndex = monitor.getItem().index
    const dragListId = monitor.getItem().listId
    const hoverIndex = props.index


    // Don't replace items with themselves
    if (dragIndex === hoverIndex && props.card.listId === monitor.getItem().listId) {
      return null
    }

    // Determine rectangle on screen
    const hoverBoundingRect = component.getBoundingClientRect()

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    // Determine mouse position
    const clientOffset = monitor.getClientOffset()


    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    // Dragging downwards
    if (dragListId === props.card.listId && dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return null
    }

    // Dragging upwards
    if (dragListId === props.card.listId && dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return null
    }


    // Time to actually perform the action
    props.moveCard(dragIndex, dragListId, hoverIndex, props.card.listId)

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex

    return true
  },

  drop(props, monitor, component) {
    const { listId, cardId } = monitor.getItem()
    const targetId = props.card.listId
    props.mutateMovement(listId, targetId, cardId)
  },
}

const targetCollect = connect => ({ connectDropTarget: connect.dropTarget() })

export {
  targetSpec,
  targetCollect,
}
