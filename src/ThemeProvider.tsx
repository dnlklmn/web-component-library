// not implemented yet - use for dark theme, and Medici Living themed pages

import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import theme, { inverted } from './theme'

interface Props {
  children: any
  theme: any
}

export default ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export const Inverted = ({ children }: Props) => (
  <ThemeProvider theme={inverted}>{children}</ThemeProvider>
)
