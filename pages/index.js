import React from 'react'
import Link from 'next/link'

class Index extends React.Component {
  render() {
    return (
      <div>{'Go to '}
        <Link href="/dashboard">/dashboard</Link> {'or '}
        <Link href="/login">/login</Link>
      </div>
    )
  }
}

export default Index
