import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './components/Home.jsx';
import Courses from './components/Courses.jsx';
import About from './components/About.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path:'courses',
        element: <Courses />
      },
      {
        path:'about',
        element: <About />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
