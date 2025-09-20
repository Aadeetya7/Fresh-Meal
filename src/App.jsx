import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { CssBaseline, Container } from '@mui/material'
import { useEffect, useState } from 'react'
import UserContext from './utils/userContext'

function App() {
  const [name, setname] = useState("")

  useEffect(() => {
    const data = {
      name: "aditya"
    }
    setname(data.name)
  }, [])

  return (
    <>
      <CssBaseline />
      <UserContext.Provider value={{ loggedInUser: name, setname }}>
        <Header />
        <Container sx={{ marginTop: "80px" }}>
          <Outlet />
        </Container >
      </UserContext.Provider>
    </>
  )
}

export default App
