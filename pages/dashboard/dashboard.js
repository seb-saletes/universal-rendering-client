import React from 'react'

import { MainContainer } from './__style'
import Navbar from '../../components/Navbar/Navbar'
import Board from '../../components/Board/Board'

class DashboardPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { cardsFilter: '' }
  }

  onSearh = (value) => {

    this.setState({ cardsFilter: value.toLowerCase() })
  }

  render() {
    return (
      <MainContainer>
        <Navbar onSearch={this.onSearh} />
        <Board cardsFilter={this.state.cardsFilter} />
      </MainContainer>
    )
  }
}

export default DashboardPage
