import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Component/Router/layout.jsx'
import Home from './Component/Router/Components/Home/Home.jsx'
import About from './Component/Router/Components/About/About.jsx'
import Contact from './Component/Router/Components/Contact/Contact.jsx'
import User from './Component/Router/Components/User/User.jsx'
import Github, { githubInfoLoader } from './Component/Router/Components/Github/Github.jsx'
import { Provider } from 'react-redux'
import { store } from './Component/Redux/App/Store.js'
// const router = createBrowserRouter([
//   {
//     path: '',
//     element: <Layout />,
//     children:[
//       {
//         path:'',
//         element : <Home/>
//       },
//       {
//         path:'/about',
//         element: <About/>
//       },
//       {
//         path:'/contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='user/:userid' element={<User />} />
//       <Route
//         loader={githubInfoLoader}
//         path='github'
//         element={<Github />}
//       />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

)
