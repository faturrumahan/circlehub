import { SkeletonTheme } from "react-loading-skeleton";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authentication, { action as authAction } from "./pages/Authentication";
import { action as logoutAction } from "./pages/Logout";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Search from "./pages/Search";
import RootLayout from "./pages/RootLayout";
import User from "./pages/User";
import { tokenLoader, idLoader, checkAuthLoader } from "./util/auth";
import UserProfile from "./pages/UserProfile";
import Register, { action as registAction } from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    loader: idLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        id: "tokenProfile",
        loader: tokenLoader,
        children: [
          {
            path: "/users",
            element: <User />,
          },
          {
            path: "/users/:userId",
            element: <UserProfile />,
          },
        ],
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/post/:postId",
        id: "tokenLogin",
        loader: tokenLoader,
        element: <Post />,
      },
    ],
  },
  {
    path: "/auth",
    id: "isAuth",
    loader: tokenLoader,
    children: [
      { path: "/auth", element: <Authentication />, action: authAction },
      { path: "/auth/register", element: <Register />, action: registAction },
    ],
  },
  {
    path: "/logout",
    loader: checkAuthLoader,
    action: logoutAction,
  },
]);

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <RouterProvider router={router} />
      </SkeletonTheme>
    </>
  );
}

export default App;
