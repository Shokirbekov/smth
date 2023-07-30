import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Header />
  },
  {
    path: '/login',
    element: <Login />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
      <App />
  </React.StrictMode>
);