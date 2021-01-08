import React from 'react'
import { withStyles, ThemeProvider } from '@material-ui/core/styles'
import Menu, { MenuProps } from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import FeatherIcon from 'feather-icons-react'
import Button from '@material-ui/core/Button'
import { Spacer } from './Spacer'

import { mediciLight, quartersLight, quartersTheme } from '../theme'

interface ButtonProps {
  text: string
  small?: boolean
  stretch?: boolean
  withIcon?: 'before' | 'none' | 'after'
  icon?: string
  variant?: 'contained' | 'text' | 'outlined'
  color?: 'default' | 'inherit' | 'primary' | 'secondary'
  disabled?: boolean
  onClick?: any
  ariaControls?: string
}

const appliedTheme = quartersTheme ? quartersLight : mediciLight

export const CustomizedMenus = ({
  text,
  small,
  stretch,
  withIcon,
  icon,
  variant,
  color,
  disabled
}: ButtonProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5'
    }
  })((props: MenuProps) => (
    <Menu elevation={0} getContentAnchorEl={null} {...props} />
  ))

  const StyledMenuItem = withStyles({
    root: {}
  })(MenuItem)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    console.log('here here')
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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

  const StyledButton = withStyles({
    root: {
      width: stretch ? '100%' : 'auto',
      borderRadius: 5,
      boxShadow: '0 2px 2px rgba(0,0,0,0.15)',
      padding: '.8rem 1.5rem',
      margin: 0,
      border: 0,
      '&.MuiButton-text': {
        boxShadow: '0 0 0 rgba(255,255,255,0)',
        padding: 0,
        borderRadius: quartersTheme ? 100 : 5
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
        borderRadius: quartersTheme ? 100 : 5,
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
      '&.MuiButton-outlined.Mui-disabled': {
        boxShadow: `inset 0 0 0 2px ${appliedTheme.palette.grey2.main}`,
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
  })(Button)

  return (
    <ThemeProvider theme={appliedTheme}>
      <StyledButton
        id='this-button'
        aria-haspopup='true'
        onClick={handleClick}
        disabled={disabled}
        color={color}
        disableRipple={variant === 'text' ? true : false}
        variant={variant}
        aria-controls='customized-menu'
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
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <FeatherIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Sent mail' />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <FeatherIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Drafts' />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <FeatherIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary='Inbox' />
        </StyledMenuItem>
      </StyledMenu>
    </ThemeProvider>
  )
}
