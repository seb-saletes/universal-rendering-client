import gql from 'graphql-tag'

export default gql`
  query($id: Int!) {
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
