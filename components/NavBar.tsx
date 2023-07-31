'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

interface NavBarProps {
  links: {
    name: string;
    href: string;
  }[];
}

const NavBar = ({links}:NavBarProps) => {
  const pathname = usePathname()

  return (
    <nav className="bg-gray-400 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
          <div className="text-black text-xl font-bold">    Logo</div>
          </Link>
          <ul className="flex space-x-10">
            {links.map(link=> {
              const isActive = pathname.startsWith(`${link.href}`)
              return (
                  <Link 
                    key={link.name}
                    className={isActive ? 'text-blue-800' : 'text-black'}
                    href={`${link.href}`}>
                    {link.name}
                  </Link>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;