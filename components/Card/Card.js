import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  background: white;
  box-shadow: 0 1px 0 #ccc;
  cursor: pointer;
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 20px;
  border-radius: 3px;
  padding: 8px;
  font-size: 14px;
  
  &:hover {
    background-color: #edeff0;
    border-bottom-color: #d6dadc;  
  }
`


const Card = ({ card }) => {
  return (
    <Container>
      Content
    </Container>
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
}

export default Card
