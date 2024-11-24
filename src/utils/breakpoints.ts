export const breakpoints = {
  small: 576,  // Ends at 576px
  medium: 768, // Ends at 768px
  large: 992,  // Ends at 992px
  xl: 1200,    // Starts at 993px
}

// Define media queries
export const mediaQueries = {
  small: `@media (max-width: ${breakpoints.small}px)`,
  medium: `@media (min-width: ${breakpoints.small + 1}px) and (max-width: ${breakpoints.medium}px)`,
  large: `@media (min-width: ${breakpoints.medium + 1}px) and (max-width: ${breakpoints.large}px)`,
  xl: `@media (min-width: ${breakpoints.large + 1}px)`,
}
