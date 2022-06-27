import React from 'react'
import Link from 'next/Link'


const header = () => {
  return (
    <div>
       <ul className="nav">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/products">
          <a>Product</a>
        </Link>
      </li>
    </ul>
    </div>
  )
}

export default header
