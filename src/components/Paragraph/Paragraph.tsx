import { ReactNode, CSSProperties } from 'react'
import { ParagraphWrapper } from './Paragraph.styles'

interface ParagraphProps {
  children: ReactNode
  textAlign?: CSSProperties['textAlign']
  color?: CSSProperties['color']
  fontFamily?: CSSProperties['fontFamily']
  fontSize?: CSSProperties['fontSize']
}

export default function Paragraph({
  children,
  textAlign,
  color,
  fontFamily,
  fontSize,
}: ParagraphProps) {
  return (
    <ParagraphWrapper
      style={{
        textAlign,
        color,
        fontFamily,
        fontSize,
      }}
    >
      {children}
    </ParagraphWrapper>
  )
}
