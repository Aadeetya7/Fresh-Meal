import { createRoot } from 'react-dom/client'
import './styles/global.scss'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Contact from './components/contact.jsx'
import Error from './components/Error.jsx'
import CardsBody from './components/CardsBody.jsx'
import RestaurantMenuPage from './components/ResturantMenupage.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <CardsBody />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/resturants/:resid",
        element: <RestaurantMenuPage />
      }
    ],
    errorElement: <Error />,
  },
])

const root = createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
