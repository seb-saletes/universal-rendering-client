import gql from 'graphql-tag'
import CardFragment from './card.gql'

export default gql`
    fragment ListFragment on List {
      _id
      title
      cards {
        ...CardFragment
      }
    }
    ${CardFragment}
  `
