import React from 'react'
import { ThemeProvider, withStyles } from '@material-ui/core/styles'
import { Typography as MUITypography } from '@material-ui/core'

import theme from '../theme'

interface TypoProps {
  children?: React.ReactNode
  text?: string
  buttonTextSize?: 's' | 'l'
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

export const Typography = ({
  variant,
  children,
  text,
  buttonTextSize,
  color
}: TypoProps) => {
  const StyledTypo = withStyles({
    button: {
      fontSize: buttonTextSize === 'l' ? '1.5rem' : '1rem'
    }
  })(MUITypography)
  return (
    <ThemeProvider theme={theme}>
      <StyledTypo color={color} variant={variant}>
        {children ? children : text}
      </StyledTypo>
    </ThemeProvider>
  )
}

Typography.defaultProps = {
  text: 'Book now',
  buttonTextSize: 's',
  color: 'textPrimary'
}
