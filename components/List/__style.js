import styled from 'styled-components'

const ListContainer = styled.div`

  width: ${({ theme }) => theme.size.listWidth};
  height: 100%;
  display: inline-block;
`

const ListContent = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    
  > * {
    background-color: ${({ theme }) => theme.color.listBg};
    color: #333;
    padding: 0 ${({ theme }) => theme.size.gap};
  }
`

const CardsContainer = styled.div` 
    list-style: none;
    margin: 0;
    max-height: calc(100% - ${({ theme }) => theme.size.listHeader} - ${({ theme }) => theme.size.listFooter});
    overflow-y: auto;
    padding-bottom: ${({ theme }) => theme.size.gap};
`

const ListFooter = styled.div` 
    line-height: ${({ theme }) => theme.size.listFooter};
    border-bottom-left-radius: ${({ theme }) => theme.size.listBorderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.size.listBorderRadius};
    color: #888;
    
    cursor: pointer;
        
    ${({ isAddingCard }) => (!isAddingCard
    ? `
      &:hover {
        background-color: #c4c9cc;
      }`
    : 'display: none;')};
`

export {
  ListContainer,
  ListContent,
  CardsContainer,
  ListFooter,
}
