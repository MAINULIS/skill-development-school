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
import Contact from './components/Contact.jsx';


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
        element: <Courses />,
        loader: () => fetch('data.json'),
      },
      {
        path:'about',
        element: <About />
      },
      {
        path:'contact',
        element:<Contact />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
