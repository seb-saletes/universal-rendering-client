import React from 'react'

export default ComposedComponent => (props) => {
  console.log(ComposedComponent)
  return (
    <React.Fragment>
      <ComposedComponent {...props} />
    </React.Fragment>
  )
}
