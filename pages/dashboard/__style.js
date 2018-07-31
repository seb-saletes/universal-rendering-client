import styled from 'styled-components'

const MainContainer = styled.div`
  height: 100vh;
  display: grid;
  
  grid-template-rows: ${({ theme }) => theme.size.navbarMobile} 1fr;
  
  ${({ theme: { media } }) => media.tablet`
    grid-template-rows: ${({ theme }) => theme.size.navbar} 1fr;
  `};
  
  background-color: ${({ theme }) => theme.color.boardBg};
  color: #eee;
`

export { MainContainer }
export default MainContainer
