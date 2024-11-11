import { ReactNode } from 'react';
import { ContainerWrapper } from './Container.styles.ts';

interface ContainerProps {
  children: ReactNode
  padding?: string
  margin?: string
  backgroundColor?: string
  border?: string
  borderRadius?: string
}

export default function Container({
  children,
  padding = '16px',          // Default padding
  margin = '0',               // Default margin
  backgroundColor = 'inherit', // Default to inherit background color
  border = 'none',            // Default border
  borderRadius = '0'          // Default border radius
}: ContainerProps) {
  return (
    <ContainerWrapper
      style={{
        padding,
        margin,
        backgroundColor,
        border,
        borderRadius
      }}
    >
      {children}
    </ContainerWrapper>
  )
}