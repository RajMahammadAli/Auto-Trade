import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import AddProduct from "./components/AddProduct/AddProduct.jsx";
import Roots from "./Root/Roots";
import MyCart from "./components/MyCart/MyCart";
import LogIn from "./components/LogIn/LogIn";
import AuthProvider from "./AuthProvider/AuthProvider";
import Register from "./components/Register/Register.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import { ToastContainer } from "react-toastify";
import BrandProducts from "./components/BrandProducts/BrandProducts.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import Error404 from "./components/Error404/Error404.jsx";
import UpdateForm from "./components/UpdataForm/UpdateForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error404></Error404>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://server-side-brand-shop.vercel.app/products`),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://server-side-brand-shop.vercel.app/products`),
      },
      {
        path: "/updateForm/:id",
        element: (
          <PrivateRoute>
            <UpdateForm></UpdateForm>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://server-side-brand-shop.vercel.app/products`),
      },
      { path: "/logIn", element: <LogIn></LogIn> },
      {
        path: `/brandProducts/:id`,
        element: <BrandProducts></BrandProducts>,
        loader: () => fetch(`/BrandDetails.json`),
      },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
