import { ReactNode } from 'react'
import { ParagraphWrapper } from './Paragraph.styles'

type ParagraphProps = {
  children: ReactNode
  center?: boolean
}

export default function Paragraph({ children, center = false }: ParagraphProps) {
  return <ParagraphWrapper center={center}>{children}</ParagraphWrapper>
}
