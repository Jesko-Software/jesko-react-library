import { ReactNode } from 'react'
import { HeaderWrapper } from './Header.styles.ts'

type HeaderProps = {
  children: ReactNode
  center?: boolean
}

export default function Header({ children, center = false }: HeaderProps) {
  return <HeaderWrapper center={center}>{children}</HeaderWrapper>
}
