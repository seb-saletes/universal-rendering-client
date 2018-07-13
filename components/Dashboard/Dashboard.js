import React from 'react'
import PropTypes from 'prop-types'
import List from '../List/List'

const Dashboard = ({ lists }) => {
  console.log(lists)
  return (
    <main>
      <div>RENDERED !</div>
      {lists.map(list => <List list={list} />)}
    </main>
  )
}

Dashboard.propTypes = {
  lists: PropTypes.array,
}

Dashboard.defaultProps = {
  lists: [],
}


export default Dashboard
