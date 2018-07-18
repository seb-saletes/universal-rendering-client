import gql from 'graphql-tag'
import CardFragment from '../_fragments/card.gql'

export default gql`
  mutation($listId: String!, $cardId: String!) {
    deleteCard(listId: $listId, cardId: $cardId) {
      ...CardFragment
    }
  }
  ${CardFragment}
`
