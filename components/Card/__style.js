import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  background: white;
  box-shadow: 0 1px 0 #ccc;
  cursor: pointer;
  margin: 8px;
  max-width: 300px;
  border-radius: 3px;
  padding: 8px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  
  &:hover {
    background-color: #edeff0;
    border-bottom-color: #d6dadc;
    
    
    i {
      display: inline-block !important;
    }
  }
`

const Title = styled.div`
    max-width: 80%;
    word-wrap: break-word;
    min-height: 20px;
    line-height: 20px;
`

const Icon = styled(props => <i className={`${props.className} ${props.name}`} onClick={props.onClick} />)`
  color: #999;
  font-size: 12px;
  padding: 4px;
  border-radius: 3px;
  display: none;
  
  &:hover {
    color: #4d4d4d;
    background-color: #d6dadc;
    opacity: 1;
    text-decoration: none;
  }
`
export {
  Container,
  Title,
  Icon,
}
