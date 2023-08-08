import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="bg-yellow-200 shadow-md left-0 right-0 top-0 min-h-[3rem]">
      <div className="flex">
        <Link href="/" className=""></Link>
      </div>
    </div>
  )
}

export default NavBar
