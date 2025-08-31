import { createBrowserRouter } from "react-router";
import Add from "../pages/Add";
import Home from "../pages/Home";
import Update from "../pages/Update";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotAllowed from "../pages/NotAllowed";
import AdminPage from "../pages/AdminPage";
import ModOrAdminPage from "../pages/ModOrAdminPage";
import UserPage from "../pages/UserPage";
import Profile from "../pages/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: (
      <AdminPage>
        <Add />
      </AdminPage>
    ),
  },
  {
    path: "/update/:id",
    element: (
      <ModOrAdminPage>
        <Update />
      </ModOrAdminPage>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/notallowed",
    element: <NotAllowed />,
  },
  {
    path: "/profile",
    element: (
      <UserPage>
        <Profile />
      </UserPage>
    ),
  },
]);
export default router;
