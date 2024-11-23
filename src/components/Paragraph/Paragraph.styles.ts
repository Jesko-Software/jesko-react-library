import styled from 'styled-components'

export const ParagraphWrapper = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.paragraph}; // Default font size from theme
  color: ${({ theme }) => theme.colors.paragraph};       // Default color from theme
  font-family: ${({ theme }) => theme.fonts.paragraph}; // Default font family from theme
`
