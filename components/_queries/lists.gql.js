import gql from 'graphql-tag'
import ListFragment from '../_fragments/list.gql'

export default gql`
  query {
    lists {
      ...ListFragment
    }
  }
  ${ListFragment}
`
