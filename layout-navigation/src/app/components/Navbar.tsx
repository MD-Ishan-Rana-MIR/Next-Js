"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const navItem = [
    {
      name: "Home", href: "/",
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" }
  ]
  const pathName = usePathname();
  console.log(`path name is ${pathName} `)
  return (
    <div>
      <header>
        <div className=' flex items-center justify-between max-w-6xl mx-auto py-4 bg-green-400 px-5 rounded-3xl  ' >
          <div>
            <Link href={"/"}>LoGO</Link>
          </div>
          <div>
            <nav>
              <ul className=' flex items-center space-x-6  ' >
                {
                  navItem.map((item,i)=>{
                    const isActive = pathName===item.href
                    return(
                      <li key={i} >
                          <Link className={`${isActive ? " bg-gray-300 px-3 py-3 rounded-lg   ":""}`}  href={item.href}> {item.name} </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar