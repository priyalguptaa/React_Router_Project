import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Componenets/Home/Home.jsx'
import About from './Componenets/About/About.jsx'
import Contact from './Componenets/Contact/Contact.jsx'
import User from './Componenets/User/User.jsx'
import Github, { githubInfoLoader } from './Componenets/Github/Github.jsx'
// this is one way
// const router = createBrowserRouter([
//   {
//     // this is nesting routing
//     path:"/",
//     element:<Layout/>,
//     // abb yha children bhi honge jese home about or bhi isly yha childern add karna hoga
//     children: [
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//       {
//         path:"user/:userid",
//         element:<User/>
//       }
//     ]
//   }
// ])

//this is another way
const router = createBrowserRouter(
  createRoutesFromElements(
    // this is basically used to understand the roting library
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      {/* : colon is basically used to take id and data dynamically from url */}
      {/* when we render those component here which we will acess the data from there */}
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
      // we can create the fetch is also here but it is not a best practice so we create a function and pass the function in the loader
      path='github' 
      element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* routerProvider it provide the routers like BrowserRouter and other thing or it is necessary to give one prop of it */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
