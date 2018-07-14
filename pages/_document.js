import React from 'react'
import styled, { ServerStyleSheet } from 'styled-components'
import Document, { Head, Main, NextScript } from 'next/document'
import theme from './_theme'

const Body = styled.body`
  margin: 0;
  background: ${theme.color.primaryLight};
  > * {
    font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
  }
`
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...initialProps, ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </html>
    )
  }
}
