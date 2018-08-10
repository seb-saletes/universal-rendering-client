import gql from 'graphql-tag'

export default gql`
  mutation($username: String!, $password: String!) {
    createUser(username: $username, password: $password)
  }
`
