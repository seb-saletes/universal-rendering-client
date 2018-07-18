import gql from 'graphql-tag'

export default gql`
    fragment CardFragment on Card {
      _id
      listId
      title
    }
  
  `
