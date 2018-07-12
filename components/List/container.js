import { graphql } from 'react-apollo'
import query from './query'

import ListComponent from './component'

export default graphql(query, {
  options: {
    variables: { id: 1 },
  },
  props: ({ data }) => ({
    list: data.list,
  }),
})(ListComponent)
