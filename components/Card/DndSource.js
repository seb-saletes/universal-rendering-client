const sourceSpec = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
      cardId: props.card._id,
      listId: props.card.listId,
    }
  },
}

const sourceCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
})

export {
  sourceSpec,
  sourceCollect,
}
