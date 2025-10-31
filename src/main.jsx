import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Login from "./components/login.jsx";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage.jsx";
import Signup from "./components/signup.jsx";
import Dashboard from "./components/Dashboard.jsx";
import UserDashboard from "./components/UserDashboard.jsx";


const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/", element:<Signup/>},
  { path: "/chat", element: <App /> },
  { path: "*", element: <NotFoundPage/>},
  { path: "/dashboard", element: <Dashboard/>},
  { path: "/dashboard/:id", element: <UserDashboard/>}
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
  <RouterProvider router={router}/>
    
  </StrictMode>
);
