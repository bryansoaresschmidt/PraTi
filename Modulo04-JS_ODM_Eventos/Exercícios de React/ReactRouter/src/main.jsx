import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, Navigate, RouterProvider  } from 'react-router-dom'

import Home from './routes/Home'
import Contact from './routes/Contact'
import ErrorPage from './routes/ErrorPage'
import ContactDetails from './routes/ContactDetails'

// const router =  createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/contact',
//     element: <Contact />
//   }

// ])

const router =  createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      // identificador único
      {
        path: '/contact/:id',
        element: <ContactDetails />
      },
      // navigate para página nn existentes, páginas que atualizaram
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
