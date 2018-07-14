import gql from 'graphql-tag'

export default gql`
  mutation($title: String!) {
    createList(title: $title) {
      _id
      title
      cards {
        _id
        title
      }
    }
  }
`
