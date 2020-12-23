import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { quartersLight, mediciLight, currentTheme } from '../theme'

const appliedTheme =
  currentTheme === 'mediciLight' ? mediciLight : quartersLight

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
