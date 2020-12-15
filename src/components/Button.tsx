import React from 'react'
import { ThemeProvider, withStyles } from '@material-ui/core/styles'
import { Button as MUIButton } from '@material-ui/core'
import theme from '../theme'

interface ButtonProps {
  text: string
  size?: 'small' | 'large'
}

export const Button = ({ text, size }: ButtonProps) => {
  const StyledButton = withStyles({
    root: {
      borderRadius: 100,
      boxShadow: '0 2px 2px rgba(0,0,0,0.15)',
      padding: 0,
      margin: 0,
      '&.MuiButton-text': {
        boxShadow: '0 2px 2px rgba(0,0,0,0.15)',
        padding: 0
      },
      '&:hover': {
        boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
      }
    },
    label: {
      fontSize: size === 'small' ? '1rem' : '1.5rem',
      textTransform: 'uppercase',
      letterSpacing: 1,
      padding: size === 'small' ? '.75rem 1.5rem' : '1rem 1.75rem'
    }
  })(MUIButton)

  return (
    <ThemeProvider theme={theme}>
      <StyledButton color='primary' variant='contained'>
        {text}
      </StyledButton>
    </ThemeProvider>
  )
}

Button.defaultProps = {
  text: 'Book now',
  size: ''
}
