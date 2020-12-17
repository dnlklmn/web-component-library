import React from 'react'
import { ThemeProvider, withStyles } from '@material-ui/core/styles'
import { Button as MUIButton } from '@material-ui/core'
import theme from '../theme'
import FeatherIcon from 'feather-icons-react'
import { Spacer } from './Spacer'

interface ButtonProps {
  text: string
  small?: boolean
  stretch?: boolean
  withIcon?: 'before' | 'none' | 'after'
  icon?: string
}

export const Button = ({
  text,
  small,
  stretch,
  withIcon,
  icon
}: ButtonProps) => {
  const StyledButton = withStyles({
    root: {
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
      fontSize: small ? '1rem' : '1.5rem',
      textTransform: 'uppercase',
      letterSpacing: 1,
      display: 'block',
      whiteSpace: 'nowrap',
      padding: '.75rem 1.5rem'
    },
    icon: {}
  })(MUIButton)

  const IconBefore =
    withIcon === 'before'
      ? [
          <FeatherIcon
            margin='auto 0'
            size={small ? '1rem' : '1.5rem'}
            icon={icon}
          />,
          <Spacer size={small ? 1 : 1.5} />
        ]
      : null

  const IconAfter =
    withIcon === 'after'
      ? [
          <Spacer size={small ? 1 : 1.5} />,
          <FeatherIcon
            margin='auto 0'
            size={small ? '1rem' : '1.5rem'}
            icon={icon}
          />
        ]
      : null

  return (
    <ThemeProvider theme={theme}>
      <StyledButton color='primary' variant='contained'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          {IconBefore}
          {text}
          {IconAfter}
        </div>
      </StyledButton>
    </ThemeProvider>
  )
}

Button.defaultProps = {
  text: 'Book now',
  size: '',
  stretch: false,
  withIcon: 'before',
  icon: 'box'
}
