import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PATH } from "./route";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import MyPage from "../pages/MyPage";
import MainPage from "../pages/MainPage";

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <MainPage />,
  },
  {
    path: PATH.LOGIN,
    element: <LoginPage />,
  },
  {
    path: PATH.SIGNUP,
    element: <SignupPage />,
  },
  {
    path: PATH.MYPAGE,
    element: <MyPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
