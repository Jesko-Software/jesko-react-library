import { ReactNode } from 'react'
import { HeaderWrapper } from './Header.styles.ts'

type HeaderProps = {
  children: ReactNode
  center?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' // Dynamic header type
  font?: string
  fontSize?: string
  color?: string
}

export default function Header({
  children,
  center = false,
  as = 'h1', // Default to h1
  font,
  fontSize,
  color
}: HeaderProps) {
  return (
    <HeaderWrapper as={as} center={center} font={font} fontSize={fontSize} color={color}>
      {children}
    </HeaderWrapper>
  )
}