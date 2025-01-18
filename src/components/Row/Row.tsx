import { ReactNode } from 'react';
import { RowWrapper } from './Row.styles';

type RowProps = {
  children: ReactNode
}

export default function Row({ children }: RowProps) {
  return <RowWrapper>{children}</RowWrapper>
}
