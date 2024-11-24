import styled from 'styled-components'
import { generateResponsiveStyles, ResponsiveProps } from '../../utils/responsive'

export const HeaderWrapper = styled.h1<{ responsive?: ResponsiveProps }>`
  font-size: ${({ theme, as }) => theme.fontSizes[as || 'h1']}; // Default font size from theme
  color: ${({ theme }) => theme.colors.header};                // Default color from theme
  font-family: ${({ theme }) => theme.fonts.header};           // Default font family from theme
  margin: 0;

  ${({ responsive }) => generateResponsiveStyles(responsive)}
`
