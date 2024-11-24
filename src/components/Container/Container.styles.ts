import styled from 'styled-components'
import { generateResponsiveStyles, ResponsiveProps } from '../../utils/responsive'

export const ContainerWrapper = styled.div<{ responsive?: ResponsiveProps }>`
  box-sizing: border-box;
  flex-direction: column;

  ${({ responsive }) => generateResponsiveStyles(responsive)}
`
