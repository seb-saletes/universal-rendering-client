import styled from 'styled-components'

const ListFooter = styled.div` 
    line-height: ${({ theme }) => theme.size.listFooter};
    border-bottom-left-radius: ${({ theme }) => theme.size.listBorderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.size.listBorderRadius};
    padding: 0 ${({ theme }) => theme.size.gap};
    color: #888;
    
    cursor: pointer;
    
    &:hover {
      background-color: #c4c9cc;
    }
    
    display: ${({ isAddingCard }) => (isAddingCard ? 'none' : 'block')}
`

export { ListFooter }
