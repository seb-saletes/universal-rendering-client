import React from 'react'

export default ComposedComponent => props => (
  <React.Fragment>
    <style jsx global>{`
      body {
        margin: 0;
        font-size: 14px;
        line-height: 1.3em;
        font-family: 'Roboto', "Helvetica Neue", Arial, Helvetica, sans-serif;
      }

      button, input[type="submit"], input[type="reset"] {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
      }
    `}
    </style>
    <ComposedComponent {...props} />
  </React.Fragment>
)
