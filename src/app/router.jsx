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
import Categories from "../pages/Categories"
import Category from "../pages/Category";

import { CreateTopicModal } from "../features/topics/components/CreateTopicModal";
import { AuthGuard } from "../features/auth/AuthGuard";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/forums", element: <Forums /> },
      {
        path: "/forums/:forumSlug",
        element: <Forum />,
        children: [
          {
            path: "new-topic",
            element: (
              <AuthGuard>
                <CreateTopicModal />
              </AuthGuard>
            ),
          },
        ],
      },
      { path: "/categories", element: <Categories /> },
      { path: "/categories/:categorySlug", element: <Category /> },

      { path: "/topics/:topicId", element: <Topic /> },

      {
        path: "/profile",
        element: (
          <Profile />
        ),
      },
    ],
  },

  {
    path: "/chat",
    element: (
      <AuthGuard>
        <LiveChat />
      </AuthGuard>
    ),
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
