import gql from 'graphql-tag'

export default gql`
  query {
    currentUser {
      _id
      username
    }
  }
`
