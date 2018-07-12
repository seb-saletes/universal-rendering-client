import React from 'react'

export default ({ list }) => {
  console.log(list)
  return (
    <main>
      <div>RENDERED !</div>
      <div>Title: {list.title}</div>
      <div>id: {list.id}</div>
      {list.cards.map(card => (
        <div>
          <div>Card title: {card.title}</div>
          <div>Card id: {card.id}</div>
        </div>
      ))}
    </main>
  )
}
