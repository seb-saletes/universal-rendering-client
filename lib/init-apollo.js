import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

const getUri = () => {
  console.log(process.env.NODE_ENV === 'production' ? process.env.API_URL : 'http://localhost:4000')
  return process.env.NODE_ENV === 'production' ? process.env.API_URL : 'http://localhost:4000'
}

const create = initialState => new ApolloClient({
  connectToDevTools: process.browser,
  ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
  link: new HttpLink({
    uri: 'https://server-hkust.herokuapp.com', // Server URL (must be absolute)
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  }),
  cache: new InMemoryCache().restore(initialState || {}),
})

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
