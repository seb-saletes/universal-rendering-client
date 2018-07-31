import { css } from 'styled-components'

const sizes = {
  desktop: 1200,
  laptop: 992,
  tablet: 768,
  phone: 576,
}

const theme = {
  color: {
    primary: '#026aa7',
    primaryLight: '#5298d9',
    primaryDark: '#004078',
    secondary: '#e2e4e6',
    secondaryLight: '#ffffff',
    secondaryDark: '#b0b2b4',
    boardBg: '#0079bf',
    listBg: '#e2e4e6',
    navbar: '#0067a3',
  },

  size: {
    navbar: '50px',
    navbarMobile: '80px',
    listHeader: '36px',
    listFooter: '36px',
    listWidth: '300px',
    gap: '10px',
    scrollbar: '17px',
    listBorderRadius: '5px',
    cardBorderRadius: '3px',
  },

  media: Object.keys(sizes).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
    return accumulator
  }, {}),
}

export default theme
// $appbar-bg-color: #0067a3;
