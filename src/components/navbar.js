import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
    </div>
  )
}

export default navbar
