import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Typography as MUITypography } from '@material-ui/core'

import theme from '../theme'

interface TypoProps {
  children?: React.ReactNode
  text?: string
  variant?:
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'overline'
    | 'srOnly'
  color?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error'
}

export const Typography = ({ variant, children, text, color }: TypoProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MUITypography color={color} variant={variant} display='block'>
        {children ? children : text}
      </MUITypography>
    </ThemeProvider>
  )
}

Typography.defaultProps = {
  text: 'Book now',
  color: 'textPrimary'
}
