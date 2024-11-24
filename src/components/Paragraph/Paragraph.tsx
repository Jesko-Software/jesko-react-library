import { ReactNode, CSSProperties } from 'react'
import { ParagraphWrapper } from './Paragraph.styles'
import { ResponsiveProps } from '../../utils/responsive'

interface ParagraphProps {
  children: ReactNode
  textAlign?: CSSProperties['textAlign']
  color?: CSSProperties['color']
  fontFamily?: CSSProperties['fontFamily']
  fontSize?: CSSProperties['fontSize']
  responsive?: ResponsiveProps
}

export default function Paragraph({
  children,
  textAlign,
  color,
  fontFamily,
  fontSize,
  responsive
}: ParagraphProps) {
  return (
    <ParagraphWrapper
      style={{
        textAlign,
        color,
        fontFamily,
        fontSize,
      }}
      responsive={responsive}
    >
      {children}
    </ParagraphWrapper>
  )
}
