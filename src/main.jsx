import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="login/" element={<Login />} />
      
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
