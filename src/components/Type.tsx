import * as React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Typography as MUITypography } from '@material-ui/core'

import theme from '../theme'

interface TypeProps {
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

export const Type = ({ text, variant, color }: TypeProps) => {
  let parsedText: any = text
    ? text
        .replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>')
        .replace(/\*(.*)\*/gim, '<i>$1</i>')
        .replace(/!!/gim, '<br/>')
    : null

  return (
    <ThemeProvider theme={theme}>
      <MUITypography color={color} variant={variant}>
        <div dangerouslySetInnerHTML={{ __html: parsedText }} />
      </MUITypography>
    </ThemeProvider>
  )
}

Type.defaultProps = {
  height: 200,
  width: 200,
  text: 'Hello **world** and hello **everyone**',
  variant: 'h4',
  color: 'textPrimary'
}
