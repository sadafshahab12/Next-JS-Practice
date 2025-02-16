import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>This is dynamic page</h1>
      <Link href={"/dynamic-routes/users"}>Users</Link>
    </div>
  )
}

export default page
