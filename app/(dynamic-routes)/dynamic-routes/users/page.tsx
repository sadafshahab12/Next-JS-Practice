import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <ul>
      <li> <Link href={"/dynamic-routes/users/1"}>User 1</Link></li>
      <li><Link href={"/dynamic-routes/users/2"}>User 2</Link></li>
      <li><Link href={"/dynamic-routes/users/3"}>User 3</Link></li>
      <li><Link href={"/dynamic-routes/users/4"}>User 4</Link></li>
    </ul>
  )
}

export default page
