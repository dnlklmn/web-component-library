import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Typography as MUITypography } from '@material-ui/core'

import { mediciLight, quartersTheme, quartersLight } from '../theme'

const appliedTheme = quartersTheme ? quartersLight : mediciLight

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
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
}

export const Typography = ({
  variant,
  children,
  text,
  color,
  align
}: TypoProps) => {
  return (
    <ThemeProvider theme={appliedTheme}>
      <MUITypography
        color={color}
        variant={variant}
        align={align}
        display='block'
      >
        {children ? children : text}
      </MUITypography>
    </ThemeProvider>
  )
}

Typography.defaultProps = {
  text: 'Book now',
  color: 'textPrimary',
  align: 'left'
}
