import React from 'react'
import { ThemeProvider, withStyles } from '@material-ui/core/styles'
// import { Button as MUIButton } from '@material-ui/core'
import { Select as MUISelect } from '@material-ui/core'
import theme from '../theme'
// import FeatherIcon from 'feather-icons-react'
// import { Spacer } from './Spacer'

interface SelectProps {}

export const Select = ({}: SelectProps) => {
  const StyledSelect = withStyles({})(MUISelect)

  return (
    <ThemeProvider theme={theme}>
      <StyledSelect
        labelId='demo-simple-select-helper-label'
        id='demo-simple-select-helper'
        // value={age}
        placeholder='here heres'
        value='here'
        label='this here field'
        // onChange={handleChange}
      ></StyledSelect>
    </ThemeProvider>
  )
}

Select.defaultProps = {}
