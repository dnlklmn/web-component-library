import React from 'react'
import { ThemeProvider, withStyles } from '@material-ui/core/styles'
import { Button as MUIButton } from '@material-ui/core'
import theme from '../theme'

interface ButtonProps {
  text: string
  size?: 'small' | 'large'
  stretch?: boolean
}

export const Button = ({ text, size, stretch }: ButtonProps) => {
  const StyledButton = withStyles({
    root: {
      maxHeight: size === 'small' ? 52 : 74,
      width: stretch ? '100%' : 'auto',
      borderRadius: 100,
      boxShadow: '0 2px 2px rgba(0,0,0,0.15)',
      padding: 0,
      margin: 0,
      border: 0,
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
      padding: '.75rem 1.5rem'
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
  size: '',
  stretch: false
}
