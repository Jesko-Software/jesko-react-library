import styled from 'styled-components'

export const HeaderWrapper = styled.h1`
  margin: 0;
  font-size: ${({ theme, as }) => theme.fontSizes[as || 'h1']}; // Default font size from theme
  color: ${({ theme }) => theme.colors.header};                // Default color from theme
  font-family: ${({ theme }) => theme.fonts.header};           // Default font family from theme
`
