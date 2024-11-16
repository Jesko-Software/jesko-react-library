import { ReactNode } from 'react';
import { ContainerWrapper } from './Container.styles.ts';

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
}

export default function Container({
  children,
  padding = '16px',
  margin = '0',
  backgroundColor = 'inherit',
  border = 'none',
  borderRadius = '0',
  display = 'flex',          // Default to flex for Container
  justifyContent,            // Optional, no default
  alignItems,                // Optional, no default
  height,                    // Optional, no default
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
      }}
    >
      {children}
    </ContainerWrapper>
  )
}