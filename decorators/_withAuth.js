import React from 'react'
import { withApollo, Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_AUTH_TOKEN = gql` {
    authToken @client
  }
`

export default ComposedComponent => withApollo(props => (
  <Query query={GET_AUTH_TOKEN}>
    {({ data }) => <ComposedComponent {...props} authToken={data.authToken} />}
  </Query>
))
