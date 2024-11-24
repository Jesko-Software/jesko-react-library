import styled from 'styled-components'
import { generateResponsiveStyles, ResponsiveProps } from '../../utils/responsive'

export const ParagraphWrapper = styled.p<{ responsive?: ResponsiveProps }>`
  font-size: ${({ theme }) => theme.fontSizes.paragraph}; // Default font size from theme
  color: ${({ theme }) => theme.colors.paragraph};       // Default color from theme
  font-family: ${({ theme }) => theme.fonts.paragraph}; // Default font family from theme
  margin: 0;

  ${({ responsive }) => generateResponsiveStyles(responsive)}
`
