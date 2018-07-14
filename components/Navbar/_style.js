import styled from 'styled-components'

const Navbar = styled.div`
  position: relative;
  border-radius: 3px;
  padding: 4px;
  display: flex;
  align-items: center;
  color: white;
  background: ${({ theme }) => theme.color.primary};
  text-align: center;
  justify-content: flex-end;
`

const Item = styled.span`
  background: ${({ theme }) => theme.color.primaryLight};
  margin-left: 4px;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  z-index: 1;
  font-size: 14px;
  
  &:hover {
    background: hsla(0, 0%, 100%, .2);
  }
`
const SearchbBar = styled.input`
    border-radius: 3px;
    border: none;
    font-size: 13px;
    height: 32px;
    padding-right: 32px;
    padding-left: 8px;
    line-height: 19px;
    transition: width .15s;
    width: 300px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    
    &:active, &:focus {
      border: none;
      outline: none;
    }
`
export {
  Navbar,
  Item,
  SearchbBar,
}
