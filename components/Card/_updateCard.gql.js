import gql from 'graphql-tag'
import CardFragment from '../_fragments/card.gql'

export default gql`
  mutation($listId: String!, $cardId: String!, $title: String!) {
    updateCard(listId: $listId, cardId: $cardId, title: $title) {
      ...CardFragment
    }
  }
  ${CardFragment}
`
