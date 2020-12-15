import { createMuiTheme } from '@material-ui/core/styles'
// import Typ1451Woff from './fonts/Typ1451LLWeb-Bold.woff'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    grey1: Palette['primary']
    grey2: Palette['primary']
    grey3: Palette['primary']
    grey4: Palette['primary']
    grey5: Palette['primary']
    purple: Palette['primary']
    green: Palette['primary']
    rose: Palette['primary']
  }
  interface PaletteOptions {
    grey1: PaletteOptions['primary']
    grey2: PaletteOptions['primary']
    grey3: PaletteOptions['primary']
    grey4: PaletteOptions['primary']
    grey5: PaletteOptions['primary']
    purple: PaletteOptions['primary']
    green: PaletteOptions['primary']
    rose: PaletteOptions['primary']
  }
}

const typ1451 = {
  fontFamily: 'Typ1451LLWeb',
  src: `
      local('Typ1451LLWeb'),
      local('Typ1451LLWeb-Bold'),
      url('./fonts/Typ1451LLWeb-Bold.woff') format('woff')
    `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
}

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [typ1451]
      }
    }
  },

  palette: {
    primary: {
      main: '#40a8c4',
      dark: '#329BB8',
      light: '#4AB2CF',
      contrastText: '#fff'
    },
    secondary: { main: '#c5801a', contrastText: '#fff', dark: '#C37D13' },
    grey1: { main: '#f5f5f5' },
    grey2: { main: '#dcdcdc' },
    grey3: { main: '#aaaaaa' },
    grey4: { main: '#7E7E7E' },
    grey5: { main: '#303030' },
    error: { main: '#D82749', contrastText: '#fff' },
    success: { main: '#89AA36', contrastText: '#fff' },

    background: { paper: '#fff', default: '#fafafa' },

    text: { primary: '#303030' },

    warning: { main: '#DDDB00', contrastText: '#303030' },

    purple: { main: '#312A6F', contrastText: '#fff' },
    green: { main: '#00A099', contrastText: '#fff' },
    rose: { main: '#C6627A', contrastText: '#fff' }
  },
  typography: {
    fontFamily: 'Formale Grotesque QRT, sans-serif',
    fontSize: 16,

    // website hero
    h1: { fontSize: '3rem', fontWeight: 800, textTransform: 'uppercase' },
    h2: {
      fontSize: '2.125rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      lineHeight: 1.2
    },
    // headings
    h3: { fontSize: '2.5rem', lineHeight: 1.2 },
    h4: { fontSize: '2.125rem', lineHeight: 1.2 },
    h5: { fontSize: '1.5rem', lineHeight: 1.2 },
    h6: { fontSize: '1.25rem', lineHeight: 1.2 },

    // subtitles
    subtitle1: { fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.4 },
    subtitle2: { fontSize: '1rem', lineHeight: 1.4 },

    // body
    body1: { fontSize: '1rem', lineHeight: 1.4 },
    body2: { fontSize: '0.75rem', lineHeight: 1.4 },

    // other
    overline: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
      textTransform: 'uppercase'
    },
    caption: {
      fontSize: '1rem',
      lineHeight: 1.4,
      opacity: 0.5
    },

    // button
    button: { fontFamily: 'Typ1451LLWeb, Typ1451LL-Bold, sans-serif' }
  }
})

export const inverted = createMuiTheme({ ...theme })

export default theme
