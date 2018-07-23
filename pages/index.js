import React from 'react'
import Link from 'next/link'

// this component will never be served since withAuth hoc redirect only to dahsboard or login
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
