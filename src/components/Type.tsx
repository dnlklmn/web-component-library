import * as React from 'react'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import { Typography as MUITypography } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { mediciLight, quartersTheme, quartersLight } from '../theme'

const appliedTheme = quartersTheme ? quartersLight : mediciLight

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
  color?:
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error'
    | 'white'
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
}

export const Type = ({ text, variant, color, align }: TypeProps) => {
  let colorDecoder
  if (color === 'textPrimary') {
    colorDecoder = appliedTheme.palette.grey5.main
  }
  if (color === 'textSecondary') {
    colorDecoder = appliedTheme.palette.grey2.main
  }
  if (color === 'primary') {
    colorDecoder = appliedTheme.palette.primary.main
  }
  if (color === 'secondary') {
    colorDecoder = appliedTheme.palette.secondary.main
  }
  if (color === 'white') {
    colorDecoder = appliedTheme.palette.white.main
  }
  if (color === 'error') {
    colorDecoder = appliedTheme.palette.error.main
  }

  const useStyles = makeStyles({
    root: {
      '& a': {
        color: appliedTheme.palette.primary.main,
        textDecoration: 'none',
        fontWeight: 600
      },
      color: colorDecoder
    }
  })

  const classes = useStyles()
  let parsedText: any = text
    ? text
        .replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>')
        .replace(/\*(.*?)\*/gim, `<i>$1</i>`)
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
        .replace(/!!/gim, '<br/>')
        .replace(/->/gim, '&#x2794')
    : null

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <MUITypography
        className={classes.root}
        align={align}
        variant={variant}
        display='block'
      >
        <span dangerouslySetInnerHTML={{ __html: parsedText }} />
      </MUITypography>
    </ThemeProvider>
  )
}

Type.defaultProps = {
  height: 200,
  width: 200,
  text:
    'Hello **world** and *everyone!* &#64 Q [hello ->](http://quarters.com) ',
  variant: 'h4',
  color: 'white',
  align: 'left'
}
