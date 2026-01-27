import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Forums from "../pages/Forums";
import Forum from "../pages/Forum";
import Topic from "../pages/Topic";
import LiveChat from "../pages/LiveChat";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../features/auth/ProtectedRoute";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/forums", element: <Forums /> },
      { path: "/forums/:id", element: <Forum /> },
      { path: "/topics/:id", element: <Topic /> },

      {
        path: "/chat",
        element: (
          <ProtectedRoute>
            <LiveChat />
          </ProtectedRoute>
        ),
      },

      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },

  { path: "*", element: <NotFound /> },
]);
