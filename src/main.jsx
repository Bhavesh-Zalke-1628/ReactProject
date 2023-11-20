import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Component/Router/layout.jsx'
import Home from './Component/Router/Components/Home/Home.jsx'
import About from './Component/Router/Components/About/About.jsx'
const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children:[
      {
        path:'',
        element : <Home/>
      },
      {
        path:'/about',
        element: <About/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
