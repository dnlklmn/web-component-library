import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import { Select as MUISelect } from '@material-ui/core'
import FeatherIcon from 'feather-icons-react'

import { mediciLight, quartersLight, quartersTheme } from '../theme'

const appliedTheme = quartersTheme ? quartersLight : mediciLight

interface Props {
  color?: string
  size?: number
  listItems?: string[]
  listIcons?: string[]
  withInstruction?: boolean
  flex?: boolean
}

export const Select = ({ color, listIcons, size, listItems, flex }: Props) => {
  const [age, setAge] = React.useState<string>('0')

  const useStyles = makeStyles(() => ({
    formControl: {
      boxShadow: `inset 0 0 0 2px ${appliedTheme.palette.primary.main}`,
      overflow: 'visible',
      borderRadius: 5,
      padding: '.8rem 1.5rem',
      margin: 0,
      width: flex ? '100%' : 180,
      display: 'flex',

      '&:hover': {
        boxShadow: '0 0 16px rgba(0,0,0,0.1)'
      }
    },
    select: {
      fontSize: Number(size) * 6,
      fontFamily: 'Open Sans',
      fontWeight: 600,
      overflow: 'visible',
      display: 'flex',
      color: '#303030',
      background: 'white',
      width: '100%',
      height: '100%',

      padding: 12,
      borderRadius: 5,
      border: 0,
      margin: 0,
      outline: 0,
      '&.Mui-focused': {
        boxShadow: `0 0 0 3px ${color}`
      }
    },
    selectFirst: {
      color: 'lightGrey'
    },
    iconContainer: {
      position: 'absolute',
      height: Number(size) * 6 + 2,
      right: 12,
      pointerEvents: 'none'
    },
    iconContainerMenu: {
      height: Number(size) * 6 + 2,
      marginRight: Number(size) * 3,
      marginTop: 0
    },

    menuItem: {
      display: 'flex',
      fontSize: Number(size) * 6,
      fontFamily: 'Open Sans',
      fontWeight: 500,
      background: 'white',

      '&.Mui-selected': {
        backgroundColor: color,
        color: 'white'
      },
      '&.Mui-selected:hover': {
        backgroundColor: color
      }
    },
    menuItemFirst: {
      color: 'lightGrey'
    }
  }))

  const classes = useStyles()

  return (
    <ThemeProvider theme={appliedTheme}>
      <FormControl className={classes.formControl}>
        <MUISelect
          IconComponent={() => (
            <FeatherIcon
              className={classes.iconContainer}
              icon='chevron-down'
              size={Number(size) * 6}
            />
          )}
          SelectDisplayProps={{
            style: { background: 'white', borderRadius: 5, display: 'flex' }
          }}
          disableUnderline
          id='demo-simple-select-filled'
          value={age}
          onChange={(e) => setAge(String(e.target.value))}
        >
          {listItems
            ? listItems.map((item, index) => (
                <MenuItem value={index}>
                  {listIcons && listIcons[index].length > 0 ? (
                    <FeatherIcon
                      className={classes.iconContainerMenu}
                      icon={listIcons ? listIcons[index] : ''}
                      size={Number(size) * 6}
                    />
                  ) : (
                    ''
                  )}
                  {item}
                </MenuItem>
              ))
            : null}
        </MUISelect>
      </FormControl>
    </ThemeProvider>
  )
}

Select.defaultProps = {
  color: appliedTheme.palette.primary.main,
  size: 3,
  listItems: ['Select', 'One', 'Two', 'Three', 'Four'],
  listIcons: ['star', 'bell', 'clock', 'credit-card', 'crosshair'],
  withInstruction: false,
  flex: false
}

// function hexToRgbA(hex: string, amt: number) {
//   let c: any
//   if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
//     c = hex.substring(1).split('')
//     if (c.length === 3) {
//       c = [c[0], c[0], c[1], c[1], c[2], c[2]]
//     }
//     c = '0x' + c.join('')
//     return (
//       'rgba(' +
//       [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
//       ',' +
//       amt +
//       ')'
//     )
//   }
//   throw new Error('Bad Hex')
// }
