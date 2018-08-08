import styled from 'styled-components'

const Container = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    margin: auto;
    max-height: 300px;
    
    ${({ theme: { media } }) => media.phone`
      width: 430px;
    `};

`

const Title = styled.div`
    margin-bottom: 0;
    font-size: 38px;
    line-height: 38px;
    margin-top: 5px;
`

const SwitchInfo = styled.span`
    font-size: 18px;
    color: #999;
    margin-left: 5px;
`

const SwitchModeButton = styled.span`
    color: #298fca;
    text-decoration: underline;
    cursor: pointer;
    
    &:hover {
        color: #0c3953;
    }
`

const Form = styled.form`
  margin-top: 15px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 300;
  font-size: 20px;
`

const Input = styled.input`
  padding: 10px;
  height: 30px;
  width: calc(100% - 20px);
  font-size: 20px;
  font-weight: 300;
  border-radius: 3px;
  background: #edeff0;
  margin-bottom: 24px;
  border: 1px solid #cdd2d4;
  
  ${({ theme: { media } }) => media.phone`
    width: 410px;
  `};
  
  &:focus {
    border-color: #a5acb0;
    outline: none;
    box-shadow: 0 0 6px #cdd2d4;
  }
`

const SubmitButton = styled.button`
  width: 100%;
  background: #61bd4f;
  border-radius: 3px;
  color: white;
  padding: 12px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 2px 0 #3f6f21;
`

export {
  Container,
  Title,
  SwitchInfo,
  SwitchModeButton,
  Form,
  Label,
  Input,
  SubmitButton,
}
