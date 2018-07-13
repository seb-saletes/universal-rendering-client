import gql from 'graphql-tag'

export default gql`
  query {
    lists {
      id
      title
      cards {
        id
        title
      }
    }
  }
`
