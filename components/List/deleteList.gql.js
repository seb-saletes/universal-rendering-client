import gql from 'graphql-tag'

export default gql`
  mutation($_id: String!) {
    deleteList(_id: $_id) {
      _id
      title
      cards {
        _id
        title
      }
    }
  }
`
