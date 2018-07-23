import gql from 'graphql-tag'
import ListFragment from '../../_fragments/list.gql'

export default gql`
  mutation($_id: String!) {
    deleteList(_id: $_id) {
      ...ListFragment
    }
  }
  ${ListFragment}
`
