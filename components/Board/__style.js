import styled from 'styled-components'

const ListsContainer = styled.div` 
  display: flex;
  overflow-x: auto;
  padding: 20px 0;
  
  > * {
      flex: 0 0 auto;
      margin-left: ${({ theme }) => theme.size.gap};
    }
    &::after {
      content: '';
      flex: 0 0 ${({ theme }) => theme.size.gap}
    }
  }
`

export { ListsContainer }
