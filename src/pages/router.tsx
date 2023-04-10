import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./MainPage";
import { MapPage } from "./MapPage";

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/map/:mapId",
    element: <MapPage />,
  },
])