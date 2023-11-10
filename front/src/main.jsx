import React from "react";
import ReactDOM from "react-dom/client";
import PhotosPage from "./pages/PhotosPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <PhotosPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    }
  ]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
