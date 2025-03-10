import { cn } from '@/lib/utils'
import { IBaseCompNoChild } from '@/types/component'
import { useTheme, } from 'next-themes'
import Image from 'next/image'

type TEcoopThemeMode = 'dynamic'

type TLogoUrls =
  | '/logo-1.webp'
  | 'logo-white.webp'
  | 'logo-dark.webp'

interface Props extends IBaseCompNoChild {
  blurDisabled?: boolean
  blurClassName?: string
  themeMode?: TEcoopThemeMode
  lightUrl?: string | TLogoUrls
  darkUrl?: string | TLogoUrls
}

const getResolvedLogoUrl = (lightUrl: string, darkUrl: string, theme?: string) => {
  if (theme === 'light') return lightUrl
  return darkUrl
}

const Logo = ({
  className,
  blurClassName,
  blurDisabled = false,
  themeMode = 'dynamic',
  darkUrl = '/logo-white.webp',
  lightUrl = '/logo-dark.webp',
}: Props) => {
  const { theme } = useTheme()

  const finalUrl =
    themeMode === 'dynamic'
      ? getResolvedLogoUrl(lightUrl, darkUrl, theme)
      : themeMode === 'light'
        ? getResolvedLogoUrl(lightUrl, darkUrl, 'light')
        : getResolvedLogoUrl(lightUrl, darkUrl, 'dark')

  return (
    <div className={cn('relative size-8', className)}>
      <Image src={finalUrl} alt="logo" className="h-full w-full" width={0} height={0} />

      {!blurDisabled && (
        <Image src={finalUrl}
          alt="logo-blur"
          width={0} height={0}
          className={cn('pointer-events-none absolute inset-0 left-1/2 top-1/2 z-0 size-full -translate-x-1/2 -translate-y-[45%] blur-xl selection:bg-none', blurClassName
          )}
        />
      )}
    </div>
  )
}

export default Logo