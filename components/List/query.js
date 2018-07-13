import gql from 'graphql-tag'

export default gql`
  query($id: String!) {
    list(id: $id) {
      id
      title
      cards {
        id
        title
      }
    }
  }
`
