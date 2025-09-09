import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { CssBaseline, Container } from '@mui/material'

function App() {

  return (
    <>
      <CssBaseline />
      <Header />
      <Container sx={{ marginTop: "80px" }}>
        <Outlet />
      </Container >
    </>
  )
}

export default App
