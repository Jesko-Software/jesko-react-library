import { ReactNode } from 'react'
import { ContainerWrapper } from './Container.styles'
import { ResponsiveProps } from '../../utils/responsive'

interface ContainerProps {
  children: ReactNode
  padding?: string
  margin?: string
  backgroundColor?: string
  border?: string
  borderRadius?: string
  display?: string
  justifyContent?: string
  alignItems?: string
  height?: string
  width?: string
  responsive?: ResponsiveProps
}

export default function Container({
  children,
  padding = '16px',
  margin = '0',
  backgroundColor = 'inherit',
  border = 'none',
  borderRadius = '0',
  display = 'flex',
  justifyContent,
  alignItems,
  height,
  width = '100%',
  responsive,
}: ContainerProps) {
  return (
    <ContainerWrapper
      style={{
        padding,
        margin,
        backgroundColor,
        border,
        borderRadius,
        display,
        justifyContent,
        alignItems,
        height,
        width,
      }}
      responsive={responsive}
    >
      {children}
    </ContainerWrapper>
  )
}
