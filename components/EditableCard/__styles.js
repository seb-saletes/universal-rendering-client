import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 5px;
`

const Textarea = styled.textarea`
    word-wrap: break-word;
    resize: vertical;
    border: none;
    height: auto;
    max-height: 162px;
    min-height: 54px;
    overflow-y: auto;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 0 #ccc;
    display: flex;
    outline: none;
    width: 97%;
    padding: 4px;
    font-size: 14px;
`

export {
  Container,
  Textarea,
}
