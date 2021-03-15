import { css } from 'styled-components'

export const breakpoints = {
  mobile: '480px',
  desktop: '1200px'
}

export const responsive = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)
