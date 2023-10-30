import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
        
            path: '/contact',
             element: <Contact></Contact>
            },
        {
            path: '/dashboard',
            element:<Dashboard></Dashboard>
          }, 
        
       
        
      ]
    },
  ]);