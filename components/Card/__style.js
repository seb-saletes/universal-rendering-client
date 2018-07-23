import styled from 'styled-components'
import React from 'react'

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 20px;

  background-color: #fff;
  padding: ${({ theme }) => theme.size.gap};

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.size.gap};
  }

  border-radius: ${({ theme }) => theme.size.cardBorderRadius};
  box-shadow: 0 1px 1px rgba(0,0,0, 0.1);
  
  &:hover {
     background-color: #edeff0;
     border-bottom-color: #d6dadc;


     i {
       display: inline-block !important;
     }
   }
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
