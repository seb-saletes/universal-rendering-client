import styled from 'styled-components'
import React from 'react'

const CardContainer = styled.div`
  display: ${({ editMode }) => (editMode ? 'none' : 'flex')};
  align-items: center;
  justify-content: space-between;
  min-height: 20px;
  margin-bottom: 10px;
  

  background-color: ${({ matchFilter, isDragging }) => {
    if (isDragging) return '#C4C9CC'
    return (matchFilter ? 'yellow' : 'white')
  }};
  
  color: ${({ isDragging }) => (isDragging ? '#C4C9CC' : 'black')};
  
  padding: ${({ theme }) => theme.size.gap};

  border-radius: ${({ theme }) => theme.size.cardBorderRadius};
  box-shadow: 0 1px 1px rgba(0,0,0, 0.1);
  
  ${({ isDragging }) => (
    !isDragging ? `
      &:hover {
       background-color: #edeff0;
       border-bottom-color: #d6dadc;
  
  
       i {
         display: inline-block !important;
       }
     }`
      : '')}};
`

const Icon = styled(props => (
  <i
    role="button"
    className={`${props.className} ${props.name}`}
    onClick={props.onClick}
  />
))`
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
  CardContainer,
  Icon,
}
