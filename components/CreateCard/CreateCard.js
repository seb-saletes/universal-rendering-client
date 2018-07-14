import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  background: #e2e4e6;
  padding: 10px 20px;
  font-size: 14px;
  color: #8c8c8c;
  
  cursor: pointer;
  &:hover {
    background-color: #c4c9cc;
  }
`

const Dashboard = () => (
  <Button>+ Add another card</Button>
)

export default Dashboard
