import Link from 'next/link'
import React from 'react'

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
        <h1>Navbar</h1>
        <h1><Link href={"/about"}>About</Link></h1>
      {children}
    </div>
  )
}

export default layout
