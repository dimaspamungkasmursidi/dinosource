import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import ErrorPage from './pages/404.jsx'
import Home from './pages/Home.jsx'
import Dinopedia from './pages/Dinopedia.jsx'
import About from './pages/About.jsx'
import Shop from './pages/Shop.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '/Dinopedia',
    element: <Dinopedia />,
  },
  {
    path: '/Shop',
    element: <Shop />,
  },
  {
    path: '/About',
    element: <About />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

