import React from 'react'
import styled, { ServerStyleSheet } from 'styled-components'
import Document, { Head, Main, NextScript } from 'next/document'

const Body = styled.body`
  margin: 0;
`

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    console.log('initial props', initialProps)
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage(App => (props) => {
      console.log('props', props)
      return sheet.collectStyles(<App {...props} />)
    })
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
