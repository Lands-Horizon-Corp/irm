import Link from 'next/link'

import { IBaseCompNoChild } from '@/types'

import { cn } from '@/lib/utils'
import Logo from '@/components/logo'

interface Props extends IBaseCompNoChild {
  linkUrl?: string
}

const NavEcoopLogo = ({ linkUrl = '/', className }: Props) => {
  return (
    <Link href={linkUrl}>
      <Logo className={cn('size-[46px]', className)} />
    </Link>
  )
}

export default NavEcoopLogo