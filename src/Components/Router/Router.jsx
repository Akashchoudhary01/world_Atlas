import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from '../../Pages/Home';
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";
import Country from "../../Pages/Country";
// import Header from "../Ui/Header";
import Layout from "../Outlet/Layout";
import ErrorPage from "../../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/country",
        element: <Country />,
      },
    ],
  },
]);
