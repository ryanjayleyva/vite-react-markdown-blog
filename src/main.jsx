import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter.jsx";
import { RouterProvider } from "react-router";

const router = createBrowserRouter(AppRouter);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
