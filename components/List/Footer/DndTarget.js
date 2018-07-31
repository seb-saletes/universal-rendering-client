const isMovable = (component, monitor) => {
  if (component) {
    const hoverBoundingRect = component.getBoundingClientRect()

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    // Determine mouse position
    const clientOffset = monitor.getClientOffset()

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    return hoverClientY < hoverMiddleY || hoverClientY > hoverMiddleY
  }
  return false
}


const targetSpec = {
  hover(props, monitor, component) {

    const { srcIndex, srcListId } = monitor.getItem()

    if (isMovable(component, monitor)) {
      if (srcListId !== props.list._id) {
        props.moveCard(srcIndex, 0, srcListId, props.list._id)
        monitor.getItem().srcListId = props.list._id
        monitor.getItem().srcIndex = 0
      }
    }
  },

  canDrop(props, monitor) {
    const srcListId = monitor.getItem().originalListId

    return srcListId !== props.list._id
  },

  drop(props, monitor) {
    const card = monitor.getItem().originalCard

    props.mutateMovement(card.listId, props.list._id, card._id, 0)
  },
}

const targetCollect = connect => ({ connectDropTarget: connect.dropTarget() })

export {
  targetSpec,
  targetCollect,
}
