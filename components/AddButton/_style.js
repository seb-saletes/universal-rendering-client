import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
`
const Button = styled.span`
    background: #5aac44;
    box-shadow: 0 1px 0 #519839;
    color: #fff;
    transition: background .3s ease;
    padding: 6px 16px;
    margin-right: 10px;
    border-radius: 3px;
    text-align: center;
    font-weight: bolder;
    font-size: 14px;
    cursor: pointer;

`
export {
  Container,
  Button,
}
