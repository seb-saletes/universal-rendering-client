import React from 'react'
import styled from 'styled-components'

const Container = styled.div` 
  line-height: ${({ theme }) => theme.size.listHeader};
  font-size: 16px;
  font-weight: bold;
  border-top-left-radius: ${({ theme }) => theme.size.listBorderRadius};
  border-top-right-radius: ${({ theme }) => theme.size.listBorderRadius};
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  flex: 0 0 auto;
`

const Button = styled(props => (
  <i
    role="button"
    className={`${props.name} ${props.className}`}
    onClick={props.onClick}
  />
))`
  color: #999;
  font-size: 16px;
  padding: 4px 8px;
  border-radius: 3px;
  cursor: pointer;
     
  &:hover {
    color: #4d4d4d;
    background-color: #d6dadc;
    opacity: 1;
    text-decoration: none;
  }
`
export {
  Container,
  Button,
}
