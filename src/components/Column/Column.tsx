import { ReactNode } from 'react'
import { ColumnWrapper } from './Column.styles'

type ColumnProps = {
  children: ReactNode
  width?: string
}

export default function Column({ children, width }: ColumnProps) {
  return <ColumnWrapper width={width}>{children}</ColumnWrapper>
}
