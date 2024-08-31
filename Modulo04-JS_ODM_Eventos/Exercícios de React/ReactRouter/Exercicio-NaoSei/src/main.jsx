import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, Navigate, RouterProvider  } from 'react-router-dom'

import Home from './routes/Home'
import Users from './routes/Users'
import ErrorPage from './routes/ErrorPage'
import UserDetails from './routes/UserDetails'

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
        path: '/user',
        element: <Users />
      },
      // identificador único
      {
        path: '/user/:id',
        element: <UserDetails />
      },
      // navigate para página nn existentes, páginas que atualizaram
      {
        path: "oldcontact",
        element: <Navigate to="/users" />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
