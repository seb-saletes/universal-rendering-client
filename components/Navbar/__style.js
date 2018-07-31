import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.size.gap};
  display: flex;
  align-items: flex-start;

  
  background-color: ${({ theme }) => theme.color.navbar};
  font-size: 16px;
    
  ${({ theme: { media } }) => media.tablet`
    align-items: center;
  `};
  
  ${({ theme: { media } }) => media.desktop`
    font-size: 24px;  
  `};
`

const LogoutButton = styled.span`
  background: ${({ theme }) => theme.color.primaryLight};
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  z-index: 1;
  font-size: 14px;
  margin: auto 0 auto auto;
  
  ${({ theme: { media } }) => media.desktop`
    margin: 0 0 0 auto;
  `};
  
  &:hover {
    background: hsla(0, 0%, 100%, .2);
  }
`

const SearchbBar = styled.input`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 140px;
  
  border-radius: 3px;
  border: none;
  font-size: 13px;
  height: 32px;
  padding-right: 32px;
  padding-left: 8px;
  line-height: 19px;
   
   
  ${({ theme: { media } }) => media.tablet`
    display: block;
    width: 200px;
    left: 0;
    margin: auto;
    right: 0;
  `};
  
  ${({ theme: { media } }) => media.desktop`
    width: 300px;
  `};
    
    &:active, &:focus {
      border: none;
      outline: none;
    }
`
export {
  Container,
  LogoutButton,
  SearchbBar,
}
