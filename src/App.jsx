import './App.css'
import CardsBody from './components/CardsBody'
import Header from './components/Header'
import { CssBaseline, Container } from '@mui/material'

function App() {

  return (
    <>
      <CssBaseline />
      <Header />
      <Container sx={{ marginTop: "80px" }}>
        <CardsBody />
      </Container >
    </>
  )
}

export default App
