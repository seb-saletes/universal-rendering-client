import gql from 'graphql-tag'
import CardFragment from '../_fragments/card.gql'

export default gql`
  mutation($listId: String!, $targetId: String!, $cardId: String!) {
    moveCard(listId: $listId, targetId: $targetId, cardId: $cardId) {
      ...CardFragment
    }
  }
  ${CardFragment}
`
