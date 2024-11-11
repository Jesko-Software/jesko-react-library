import { ReactNode } from 'react';
import { RowWrapper } from './Row.styles.ts';

type RowProps = {
  children: ReactNode
}

export default function Row({ children }: RowProps) {
  return <RowWrapper>{children}</RowWrapper>
}
