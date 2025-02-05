import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import './App.css';
import SearchPage from './SearchPage';
import ProductDetails from './ProductDetails';
import MainLayout from './MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<SearchPage />} />
      <Route path="/product-details" element={<ProductDetails />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;