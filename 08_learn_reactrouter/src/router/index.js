import { Navigate } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import HomeRecommends from "../pages/HomeRecommends";
import HomeRanking from "../pages/HomeRanking";
import HomeSongmenu from "../pages/HomeSongmenu";
import Category from "../pages/Category";
import Order from "../pages/Order";
import Detail from "../pages/Detail";

import Notfound from "../pages/Notfound";
import Users from "../pages/Users";
import UserInfo from "../pages/UserInfo";
// 演示懒加载
const About = React.lazy(() => import("../pages/About"));
const User = React.lazy(() => import("../pages/User"));
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/recommend" />,
      },
      {
        path: "/home/recommend",
        element: <HomeRecommends />,
      },
      {
        path: "/home/ranking",
        element: <HomeRanking />,
      },
      {
        path: "/home/songmenu",
        element: <HomeSongmenu />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/userinfo",
    element: <UserInfo />,
  },
  {
    path: "/users/:id",
    element: <Users />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
];

export default routes;
