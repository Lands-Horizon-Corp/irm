'use client'


import { usePathname } from 'next/navigation'
import RootNav from '@/components/nav/root-nav'
import NavContainer from '@/components/nav/nav-container'
import Link from 'next/link'

import NavThemeToggle from '@/components/nav/nav-components/nav-theme-toggle'
import { cn } from '@/lib/utils'
import Logo from '@/components/logo'
import { ReactNode } from 'react'

type NavLink = {
  name: string
  path: string
  icon?: ReactNode
}

const navLinks: NavLink[] = [
  {
    name: 'Home',
    path: '/',
  },
]

const LandingNav = () => {

  const pathName = usePathname()

  return (
    <RootNav>
      <Logo />
      <NavContainer>
        {navLinks.map((link, index) => {
          const isCurrentTab = pathName === link.path
          const isExternalLink = link.path?.charAt(0) !== '/'
          return (
            <div key={index} className="relative flex space-x-1">
              {isExternalLink ? (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'scale-effects nav-links hidden items-center gap-x-2 font-normal sm:flex',
                    isCurrentTab && 'font-bold'
                  )}
                >
                  {link.name}
                  <div className="self-center">
                    {link.icon}
                  </div>
                </a>
              ) : (
                <Link
                  className={cn(
                    'scale-effects nav-links hidden items-center gap-x-2 font-normal sm:flex',
                    isCurrentTab && 'font-bold'
                  )}
                  href={link.path}
                >
                  {link.name}
                  <div className="self-center">
                    {link.icon}
                  </div>
                </Link>
              )}
              {isCurrentTab && (
                <div className="absolute -bottom-2 hidden h-[5px] w-[20px] rounded-full bg-green-500 sm:block"></div>
              )}
            </div>
          )
        })}
      </NavContainer>
      <NavContainer>
        <NavThemeToggle />
      </NavContainer>
    </RootNav>
  )
}

export default LandingNav