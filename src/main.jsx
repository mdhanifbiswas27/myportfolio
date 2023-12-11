import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import AboutMe from './Pages/AboutMe/AboutMe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
       path:'/',
       element:<Home></Home>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/about',
        element:<AboutMe></AboutMe>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
