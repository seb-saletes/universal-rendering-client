import React from 'react'
import PropTypes from 'prop-types'


const List = ({ list }) => {
  console.log(list)
  return (
    <main>
      <div>RENDERED !</div>
      <div>Title: {list.title}</div>
      <div>id: {list.id}</div>
      {/*{list.cards.map(card => (*/}
        {/*<div key={card.id}>*/}
          {/*<div>Card title: {card.title}</div>*/}
          {/*<div>Card id: {card.id}</div>*/}
        {/*</div>*/}
      {/*))}*/}
    </main>
  )
}

List.propTypes = {
  list: PropTypes.shape({
    cards: PropTypes.array.isRequired,
  }).isRequired,
}

export default List
