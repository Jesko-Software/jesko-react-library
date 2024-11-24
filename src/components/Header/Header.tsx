import { ReactNode, CSSProperties } from 'react'
import { HeaderWrapper } from './Header.styles'
import { ResponsiveProps } from '../../utils/responsive'

interface HeaderProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' // Dynamic header type
  textAlign?: CSSProperties['textAlign']
  fontFamily?: CSSProperties['fontFamily']
  fontSize?: CSSProperties['fontSize']
  color?: CSSProperties['color']
  responsive?: ResponsiveProps
}

export default function Header({
  children,
  as = 'h1', // Default to h1
  textAlign,
  fontFamily,
  fontSize,
  color,
  responsive
}: HeaderProps) {
  return (
    <HeaderWrapper
      as={as}
      style={{
        textAlign,
        fontFamily,
        fontSize,
        color,
      }}
      responsive={responsive}
    >
      {children}
    </HeaderWrapper>
  )
}
