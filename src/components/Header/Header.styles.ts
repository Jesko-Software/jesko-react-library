import styled from 'styled-components'

export const HeaderWrapper = styled.h1<{ center?: boolean }>`
  font-size: 24px;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  margin: 0;
`
