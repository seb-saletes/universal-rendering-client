import styled from 'styled-components'

const Container = styled.div`
  padding: 8px;
  width: ${({ theme }) => theme.size.listWidth};
  border-radius: ${({ theme }) => theme.size.listBorderRadius};
  background-color: ${({ theme }) => theme.color.listBg};
  height: 70px;
`
const Input = styled.input`
    background: #fff;
    display: block;
    margin: 0;
    transition: margin 85ms ease-in,background 85ms ease-in;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #298fca;
    border-radius: 3px;
    padding: 6px 8px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    
    &:active, &:focus {
      outline: none;
    }
`
export {
  Container,
  Input,
}
