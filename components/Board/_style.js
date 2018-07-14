import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-auto-columns: 272px;
  grid-auto-flow: column;
  grid-template-rows: 100%;
  padding: 10px 8px;
  max-height: calc(100vh - 80px);
  overflow-x: auto;
`

export { Container }

export default Container
