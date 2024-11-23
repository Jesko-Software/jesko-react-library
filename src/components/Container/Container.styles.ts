import styled from 'styled-components'
import { mediaQueries } from '../../utils/breakpoints'

export const ContainerWrapper = styled.div<{
  responsive?: {
    small?: Partial<CSSStyleDeclaration>
    medium?: Partial<CSSStyleDeclaration>
    large?: Partial<CSSStyleDeclaration>
    xl?: Partial<CSSStyleDeclaration>
  }
}>`
  box-sizing: border-box;
  flex-direction: column;

  ${({ responsive }) => responsive?.small && `
    ${mediaQueries.small} {
      ${Object.entries(responsive.small).map(([key, value]) => `${key}: ${value} !important;`).join('\n')}
    }
  `}

  ${({ responsive }) => responsive?.medium && `
    ${mediaQueries.medium} {
      ${Object.entries(responsive.medium).map(([key, value]) => `${key}: ${value} !important;`).join('\n')}
    }
  `}

  ${({ responsive }) => responsive?.large && `
    ${mediaQueries.large} {
      ${Object.entries(responsive.large).map(([key, value]) => `${key}: ${value} !important;`).join('\n')}
    }
  `}

  ${({ responsive }) => responsive?.xl && `
    ${mediaQueries.xl} {
      ${Object.entries(responsive.xl).map(([key, value]) => `${key}: ${value} !important;`).join('\n')}
    }
  `}
`
