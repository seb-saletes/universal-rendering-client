import React from 'react'

export default ComposedComponent => props => (
  <React.Fragment>
    <ComposedComponent {...props} />
  </React.Fragment>
)
