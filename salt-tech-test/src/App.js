import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import SearchPage from './SearchPage';
import ProductDetails from './ProductDetails';
import MainLayout from './MainLayout';
import { SearchProvider } from './SearchContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<SearchPage />} />
      <Route path="/product-details" element={<ProductDetails />} />
    </Route>
  )
);

const App = () => {
  return (
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  )

};

export default App;