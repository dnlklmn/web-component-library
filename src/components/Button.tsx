import React from 'react'
import { withStyles, ThemeProvider } from '@material-ui/core/styles'
import { Button as MUIButton } from '@material-ui/core'
import FeatherIcon from 'feather-icons-react'
import { Spacer } from './Spacer'
import { quartersLight, mediciLight, currentTheme } from '../theme'

const appliedTheme =
  currentTheme === 'mediciLight' ? mediciLight : quartersLight

interface ButtonProps {
  text: string
  small?: boolean
  stretch?: boolean
  withIcon?: 'before' | 'none' | 'after'
  icon?: string
  variant?: 'contained' | 'text' | 'outlined'
  color?: 'default' | 'inherit' | 'primary' | 'secondary'
}

export const Button = ({
  text,
  small,
  stretch,
  withIcon,
  icon,
  variant,
  color
}: ButtonProps) => {
  const StyledButton = withStyles({
    root: {
      width: stretch ? '100%' : 'auto',
      borderRadius: currentTheme === 'mediciLight' ? 5 : 100,
      boxShadow: '0 2px 2px rgba(0,0,0,0.15)',
      padding: '.75rem 1.5rem',
      margin: 0,
      border: 0,
      '&.MuiButton-text': {
        boxShadow: '0 0 0 rgba(255,255,255,0)',
        padding: 0,
        borderRadius: 5
      },
      '&.MuiButton-text:hover': {
        boxShadow: '0 0 0 rgba(255,255,255,0)'
      },
      '&.MuiButton-outlined': {
        boxShadow: `inset 0 0 0 2px ${
          color === 'primary'
            ? appliedTheme.palette.primary.main
            : appliedTheme.palette.secondary.main
        }`,
        borderRadius: currentTheme === 'mediciLight' ? 5 : 100,
        border: 0
      },
      '&.MuiButton-outlined:hover': {
        boxShadow: `inset 0 0 0 2px ${
          color === 'primary'
            ? appliedTheme.palette.primary.main
            : appliedTheme.palette.secondary.main
        }`,
        border: 0
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
      whiteSpace: 'nowrap'
    }
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
    <ThemeProvider theme={appliedTheme}>
      <StyledButton
        color={color}
        disableRipple={variant === 'text' ? true : false}
        variant={variant}
      >
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
  icon: 'box',
  variant: 'contained',
  color: 'primary'
}
