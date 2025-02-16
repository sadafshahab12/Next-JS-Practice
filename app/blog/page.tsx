import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div>
      <h1>This is my blog page</h1>
      <div className='space-x-3'>
      <Link href='/blog/first'>First Blog</Link>
      <Link href='/blog/second'>Second Blog</Link>
      </div>
  
    </div>
  )
}

export default Blog
