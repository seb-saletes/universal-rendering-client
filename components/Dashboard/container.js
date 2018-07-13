import { graphql } from 'react-apollo'
import query from './query'

import List from './List'

export default graphql(query, {
  options: {
    variables: { id: 1 },
  },
  props: ({ data }) => ({
    list: data.list,
  }),
})(List)
