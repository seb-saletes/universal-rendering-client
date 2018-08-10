import App, { Container } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import withApolloClient from '../lib/with-apollo-client'
import withStyle from '../decorators/_withStyle'
import theme from '../decorators/_theme'

// export const ThemeContext = React.createContext(
//   themes.dark // default value
// )

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    )
  }
}

export default withApolloClient(withStyle((MyApp)))
