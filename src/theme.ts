import { createMuiTheme } from '@material-ui/core/styles'

// import Typ1451Woff from './fonts/Typ1451-LL-Web.woff'

export const quartersTheme = true
// false: Medici

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
    white: Palette['primary']
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
    white: PaletteOptions['primary']
  }
}

const typ1451 = {
  fontFamily: 'Typ1451LL-Bold',
  src: `
      local('Typ1451LL'),
      local('Typ1451LL-Bold'),
      url('./fonts/Typ1451LLBold.otf') format('otf')
    `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
}

export const quartersLight = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [typ1451]
      }
    }
  },

  palette: {
    primary: {
      main: '#FF3D6A',
      dark: '#F43460',
      light: '#FC4F78',
      contrastText: '#fff'
    },
    secondary: { main: '#3BBEE3', contrastText: '#fff', dark: '#35BADE' },
    grey1: { main: '#f5f5f5' },
    grey2: { main: '#dcdcdc' },
    grey3: { main: '#aaaaaa' },
    grey4: { main: '#7E7E7E' },
    grey5: { main: '#303030' },
    error: { main: '#D00B32', contrastText: '#fff' },
    success: { main: '#89AA36', contrastText: '#fff' },
    white: { main: '#fff', contrastText: '#303030' },

    background: { paper: '#fff', default: '#fafafa' },

    text: { primary: '#303030', secondary: '#7A7A7A' },

    warning: { main: '#DDDB00', contrastText: '#303030' },

    purple: { main: '#312A6F', contrastText: '#fff' },
    green: { main: '#00A099', contrastText: '#fff' },
    rose: { main: '#C6627A', contrastText: '#fff' },

    action: {
      active: '#abcabc',
      hover: '#abcabc'
    }
  },

  typography: {
    fontFamily: 'Formale Grotesque QRT, sans-serif',
    fontSize: 16,

    // website hero
    h1: { fontSize: '3rem', fontWeight: 600, textTransform: 'uppercase' },
    h2: {
      fontSize: '2.125rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      lineHeight: 1.2
    },
    // headings
    h3: { fontSize: '2.5rem', lineHeight: 1.2 },
    h4: { fontSize: '2.125rem', lineHeight: 1.2 },
    h5: { fontSize: '1.5rem', lineHeight: 1.2 },
    h6: { fontSize: '1.25rem', lineHeight: 1.2 },

    // subtitles
    subtitle1: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.4 },
    subtitle2: { fontSize: '1rem', fontWeight: 600, lineHeight: 1.4 },

    // body
    body1: { fontSize: '1rem', lineHeight: 1.4 },
    body2: { fontSize: '0.75rem', lineHeight: 1.4 },

    // other

    caption: {
      fontSize: '1rem',
      lineHeight: 1.4,
      opacity: 0.5
    },

    overline: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    },

    // button
    button: {
      fontSize: '1rem',
      fontWeight: 600,
      letterSpacing: 0.5
    }
  }
})

export const mediciLight = createMuiTheme({
  ...quartersLight,
  palette: {
    ...quartersLight.palette,
    primary: {
      main: '#EC741F',
      dark: '#E46F1B',
      light: '#FA832E',
      contrastText: '#fff'
    },
    secondary: {
      main: '#004E82',
      contrastText: '#fff',
      dark: '#00497A',
      light: '#005994'
    },

    background: { paper: '#fff', default: '#fafafa' },

    text: { primary: '#303030', secondary: '#7A7A7A' },

    warning: { main: '#FCC404', contrastText: '#303030' }
  },
  typography: {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: 16,

    // website hero
    h1: { fontSize: '3rem', fontWeight: 600, textTransform: 'uppercase' },
    h2: {
      fontSize: '2.125rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      lineHeight: 1.2
    },
    // headings
    h3: { fontSize: '2.5rem', lineHeight: 1.2 },
    h4: { fontSize: '2.125rem', lineHeight: 1.2 },
    h5: { fontSize: '1.5rem', lineHeight: 1.2 },
    h6: { fontSize: '1.25rem', lineHeight: 1.2 },

    // subtitles
    subtitle1: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.4 },
    subtitle2: { fontSize: '1rem', lineHeight: 1.4, fontWeight: 600 },

    // body
    body1: { fontSize: '1rem', lineHeight: 1.4 },
    body2: { fontSize: '0.75rem', lineHeight: 1.4 },

    // other

    caption: {
      fontSize: '1rem',
      lineHeight: 1.4,
      opacity: 0.5
    },

    overline: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden'
    },

    // button
    button: {
      fontSize: '1rem',
      fontWeight: 600
    }
  }
})
