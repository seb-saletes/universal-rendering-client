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
    const targetCard = props.card
    const targetIndex = props.index

    const { srcIndex, srcListId } = monitor.getItem()

    if (isMovable(component, monitor)) {
      if (srcListId !== targetCard.listId) {
        props.moveCard(srcIndex, targetIndex, srcListId, targetCard.listId)
        monitor.getItem().srcListId = targetCard.listId
        monitor.getItem().srcIndex = targetIndex
        monitor.getItem.tmp = true
      } else if (srcListId === targetCard.listId && srcIndex !== targetIndex) {
        props.orderCard(srcIndex, targetIndex, srcListId)
        monitor.getItem().srcIndex = targetIndex
      }
    }
  },

  canDrop(props, monitor) {
    const targetIndex = props.index
    const targetListId = props.card.listId
    const srcIndex = monitor.getItem().originalIndex
    const srcListId = monitor.getItem().originalListId

    return srcIndex !== targetIndex || srcListId !== targetListId
  },

  drop(props, monitor) {
    const card = monitor.getItem().originalCard
    const targetIndex = props.index
    const targetListId = props.card.listId

    props.mutateMovement(card.listId, targetListId, card._id, targetIndex)
  },
}

const targetCollect = connect => ({ connectDropTarget: connect.dropTarget() })

export {
  targetSpec,
  targetCollect,
}
