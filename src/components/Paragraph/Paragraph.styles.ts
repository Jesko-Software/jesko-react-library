import styled from 'styled-components'

export const ParagraphWrapper = styled.p<{ center?: boolean }>`
  font-size: 16px;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  margin: 0;
`
