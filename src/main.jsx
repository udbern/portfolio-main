import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider} from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { router } from './routes.jsx';





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
