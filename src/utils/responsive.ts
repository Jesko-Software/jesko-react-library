import { mediaQueries } from './breakpoints'

export type ResponsiveProps = {
  small?: Partial<CSSStyleDeclaration>
  medium?: Partial<CSSStyleDeclaration>
  large?: Partial<CSSStyleDeclaration>
  xl?: Partial<CSSStyleDeclaration>
}

export function generateResponsiveStyles(responsive?: ResponsiveProps): string {
  if (!responsive) return ''

  return Object.entries(responsive)
    .map(([breakpoint, styles]) => {
      const mediaQuery = mediaQueries[breakpoint as keyof typeof mediaQueries]
      const stylesString = Object.entries(styles || {})
        .map(([key, value]) => `${key}: ${value} !important;`)
        .join('\n')
      return `${mediaQuery} { ${stylesString} }`
    })
    .join('\n')
}
