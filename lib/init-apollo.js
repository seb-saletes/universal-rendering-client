import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import { withClientState } from 'apollo-link-state'
import fetch from 'isomorphic-unfetch'
import { setContext } from 'apollo-link-context'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

// https://server-hkust.herokuapp.com/
const getUri = () => {
  console.log(process.env.NODE_ENV === 'production' ? process.env.API_URL : 'http://localhost:4000/graphql')
  return process.env.NODE_ENV === 'production' ? process.env.API_URL : 'http://localhost:4000/graphql'
}

const typeDefs = `
  type Query {
    getAuthToken: String
  }
`

const create = (initialState, authToken) => {
  const cache = new InMemoryCache().restore(initialState || {})
  const defaults = { authToken }

  const stateLink = withClientState({
    cache,
    defaults,
    typeDefs,
  })

  const authLink = setContext((_, { headers }) => {
    return ({
      headers: {
        ...headers,
        authToken,
      },
    })
  })


  const httpLink = new HttpLink({ uri: 'https://server-hkust.herokuapp.com/' })

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(stateLink.concat(httpLink)),
    cache,
  })
}

export default function initApollo(initialState, authToken) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, authToken)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, authToken)
  }

  return apolloClient
}
