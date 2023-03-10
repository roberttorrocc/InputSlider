import React from "react";
import ReactDOM from "react-dom/client";
import NormalSlider from "./views/NormalSlider";
import InputSlider from "./views/InputSlider";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/normalSlider",
    element: <NormalSlider />,
  },
  {
    path: "/inputSlider",
    element: <InputSlider />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
