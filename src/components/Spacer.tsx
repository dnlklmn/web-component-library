import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { mediciLight, quartersTheme, quartersLight } from '../theme'

const appliedTheme = quartersTheme ? quartersLight : mediciLight

interface ButtonProps {
  size: number
  color?: string
}

export const Spacer = ({ size, color }: ButtonProps) => {
  return (
    <ThemeProvider theme={appliedTheme}>
      <div
        style={{
          width: appliedTheme.spacing(size),
          height: appliedTheme.spacing(size),
          background: color
        }}
      />
    </ThemeProvider>
  )
}

Spacer.defaultProps = {
  size: 1
}
