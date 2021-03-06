import styled from 'styled-components'

const ListContainer = styled.div`
  width: 270px;
  
  height: 100%;
  display: inline-block;
  
  ${({ theme: { media } }) => media.phone`
      width: ${({ theme }) => theme.size.listWidth};
  `};
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
`

export {
  ListContainer,
  ListContent,
  CardsContainer,
}
