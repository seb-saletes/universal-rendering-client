import styled from 'styled-components'

const Navbar = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.size.gap};
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.navbar};
  font-size: 1.5rem;
`

const LogoutButton = styled.span`
  background: ${({ theme }) => theme.color.primaryLight};
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  z-index: 1;
  font-size: 14px;
  margin-left: auto;
  
  &:hover {
    background: hsla(0, 0%, 100%, .2);
  }
`
const SearchbBar = styled.input`
    position: absolute;
    left: 0;
    margin: auto;
    right: 0;

    border-radius: 3px;
    border: none;
    font-size: 13px;
    height: 32px;
    padding-right: 32px;
    padding-left: 8px;
    line-height: 19px;
    width: 300px;
    
    &:active, &:focus {
      border: none;
      outline: none;
    }
`
export {
  Navbar,
  LogoutButton,
  SearchbBar,
}
