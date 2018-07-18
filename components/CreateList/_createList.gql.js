import gql from 'graphql-tag'
import ListFragment from '../_fragments/list.gql'

export default gql`
  mutation($title: String!) {
    createList(title: $title) {
      ...ListFragment
    }
  }
  ${ListFragment}
`
