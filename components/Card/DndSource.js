const sourceSpec = {
  beginDrag(props) {
    return {
      originalIndex: props.index,
      originalCard: props.card,
      srcIndex: props.index,
      srcListId: props.card.listId, // will be updated on drag
    }
  },

  isDragging(props, monitor) {
    return monitor.getItem().originalCard._id === props.card._id
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
