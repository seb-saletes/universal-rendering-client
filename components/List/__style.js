import styled from 'styled-components'

const Container = styled.div`
  background: #e2e4e6;
  border-radius: 3px;
  box-sizing: border-box;
  white-space: normal;
  overflow: auto;
  margin-right: 10px;
`

const Header = styled.div`
    cursor: pointer;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    padding: 8px;
    justify-content: space-between;
`
const Title = styled.div`
    font-size: 14px;
    cursor: pointer;
    font-weight: bolder;
`

const DeleteButton = styled.div`
    font-size: 16px;
    cursor: pointer;
    font-weight: bolder;
    color: #999;
    padding: 4px 8px;
    border-radius: 3px;
    
    &:hover {
      color: #4d4d4d;
      background-color: rgb(205, 210, 212);
    }
`

const CardContainer = styled.div`
  height: calc(100% - 60px);
  overflow: auto;
`

const CreateCardButton = styled.div`
  background: #e2e4e6;
  padding: 10px 20px;
  font-size: 14px;
  color: #8c8c8c;
  
  cursor: pointer;
  &:hover {
    background-color: #c4c9cc;
  }
`

export {
  Container,
  Header,
  Title,
  DeleteButton,
  CardContainer,
  CreateCardButton,
}
