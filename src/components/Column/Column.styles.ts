import styled from 'styled-components'

export const ColumnWrapper = styled.div<{ width?: string }>`
  flex: ${({ width }) => (width ? `0 0 ${width}` : '1')};
  max-width: 100%;
  box-sizing: border-box;
`;
