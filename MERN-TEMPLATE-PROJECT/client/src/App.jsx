import React from "react"
import MainRouter from "./MainRouter"
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
