import gql from 'graphql-tag'

export default gql`
  query {
    lists {
      _id
      title
      cards {
        _id
        title
      }
    }
  }
`
