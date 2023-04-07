import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./MainPage/MainPage";
import App from "../App";

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  }
])