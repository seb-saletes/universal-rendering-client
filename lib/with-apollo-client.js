/* eslint-disable react/prop-types */
/* eslint-disable no-console */

import React from 'react'
import Head from 'next/head'
import { getDataFromTree } from 'react-apollo'
import cookiesBrowser from 'browser-cookies'
import Router from 'next/router'
import initApollo from './init-apollo'

const getAuthToken = (context = {}) => {
  let authToken = null

  if (context.req && context.req.headers.cookie) {
    const cookies = context.req.headers.cookie.split(';')

    cookies.forEach((cookie) => {
      if (cookie.includes('authToken')) {
        authToken = cookie.replace('authToken=', '')
      }
    })
  } else if (process.browser) {
    authToken = cookiesBrowser.get('authToken')
  }

  return authToken
}

const handleRedirection = (ctx, authToken) => {
  const url = authToken ? '/dashboard' : '/login'
  const { res, pathname } = ctx

  if (pathname === '/' && res) {
    res.writeHead(302, { Location: url })
    res.end()
  } else if (pathname === '/') {
    Router.push(url)
  }

  if (pathname === '/login' && authToken && res) {
    res.writeHead(302, { Location: url })
    res.end()
  } else if (pathname === '/login' && authToken) {
    Router.push(url)
  }

  if (pathname === '/dashboard' && !authToken && res) {
    res.writeHead(302, { Location: url })
    res.end()
  } else if (pathname === '/dashboard' && !authToken) {
    Router.push(url)
  }
}

export default App => class Apollo extends React.Component {
  static async getInitialProps(context) {
    const { Component, router, ctx } = context
    const authToken = getAuthToken(ctx)
    const apolloState = { authToken }
    let appProps = {}
    const apollo = initApollo({}, authToken)

    handleRedirection(ctx, authToken)


    if (App.getInitialProps) {
      appProps = await App.getInitialProps(context)
    }

    if (!process.browser) {
      try {
        // Run all GraphQL queries
        await getDataFromTree(
          <App
            {...appProps}
            Component={Component}
            router={router}
            apolloState={apolloState}
            apolloClient={apollo}
          />,
        )
      } catch (error) {
        // Prevent Apollo Client GraphQL errors from crashing SSR.
        // Handle them in components via the data.error prop:
        // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
        console.error('Error while running `getDataFromTree`', error)
      }

      // getDataFromTree does not call componentWillUnmount
      // head side effect therefore need to be cleared manually
      Head.rewind()

      // Extract query data from the Apollo store
      apolloState.data = apollo.cache.extract()
    } else {
      apolloState.data = {}
    }

    return {
      ...appProps,
      apolloState,
    }
  }

  constructor(props) {
    super(props)
    this.apolloClient = initApollo(this.props.apolloState.data, props.apolloState.authToken)
  }

  render() {
    return <App {...this.props} apolloClient={this.apolloClient} />
  }
}
