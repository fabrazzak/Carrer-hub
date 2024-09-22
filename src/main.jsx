import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Component/Home/Home.jsx';
import ErrorPage from './assets/Component/ErrorPage/ErrorPage.jsx';
import Root from './assets/Component/Root/Root.jsx';
import Statistics from './assets/Component/Statistics/Statistics.jsx';
import Applied from './assets/Component/Applied/Applied.jsx';
import Blogs from './assets/Component/Blogs/Blogs.jsx';
import JobDetails from './assets/Component/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,  
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },{
        path: "statistics",
        element:<Statistics></Statistics>,
      },
       {
         path: "applied",
        element:<Applied></Applied> ,
         loader: () => fetch('/jobs.json')
      },
       {
         path: "jobs/:id",
        element:<JobDetails></JobDetails> ,
        loader : ()=> fetch('/jobs.json')
      },
      
      {
        path: "blogs",
        element:<Blogs></Blogs> ,
      },
    ],  
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
