import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ErrorPage from './Pages/404';
import Index from './Pages/Index';
import Dashboard from './Pages/Dashboard';
import Checkout from './Pages/Checkout';
import ProductDetail from './Pages/Product-Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/product-detail',
    element: <ProductDetail />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
