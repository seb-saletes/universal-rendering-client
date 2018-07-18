import gql from 'graphql-tag'
import CardFragment from '../_fragments/card.gql'

export default gql`
  mutation($listId: String!, $title: String!) {
    createCard(listId: $listId, title: $title) {
      ...CardFragment
    }
  }
  ${CardFragment}
`
