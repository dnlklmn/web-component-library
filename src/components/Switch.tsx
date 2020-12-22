import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme'
import { configureStore } from '@reduxjs/toolkit'

const intialState = { theme: 'quarters' }

function themesReducer(state = intialState, action: any) {
  if (action.type === 'theme/changeTheme' && state.theme === 'quarters') {
    return {
      ...state,
      theme: 'medici'
    }
  }
  if (action.type === 'theme/changeTheme' && state.theme === 'medici') {
    return {
      ...state,
      theme: 'quarters'
    }
  }
  return state
}

const changeTheme = () => {
  return {
    type: 'theme/changeTheme'
  }
}

export const store = configureStore({ reducer: themesReducer })

// const currentTheme = (state: any) => state.theme

// let currentThemeOutput = currentTheme(store.getState())

// // console.log(currentThemeOutput)

export const Switch = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: 100,
          height: 100,
          background: 'red'
        }}
        onClick={() => {
          store.dispatch(changeTheme())
          //   currentThemeOutput = currentTheme(store.getState())
          //   console.log(currentThemeOutput)
        }}
      />
    </ThemeProvider>
  )
}

Switch.defaultProps = {
  size: 1
}
