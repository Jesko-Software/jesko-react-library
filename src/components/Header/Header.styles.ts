import styled from 'styled-components'

export const HeaderWrapper = styled.h1<{ center?: boolean; font?: string; fontSize?: string; color?: string }>`
  font-size: ${({ fontSize, theme, as }) => fontSize || theme.fontSizes[as || 'h1']};
  font-family: ${({ font, theme }) => font || theme.fonts.header};
  color: ${({ color, theme }) => color || theme.colors.header};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  margin: 0;
`
