import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme'

interface ButtonProps {
  size: number
}

export const Spacer = ({ size }: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: theme.spacing(size),
          height: theme.spacing(size)
        }}
      />
    </ThemeProvider>
  )
}

Spacer.defaultProps = {
  size: 1
}
