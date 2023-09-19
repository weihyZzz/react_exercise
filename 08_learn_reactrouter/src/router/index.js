import { Navigate } from "react-router-dom"
import About from "../pages/About"
import Home from "../pages/Home"
import HomeRecommends from "../pages/HomeRecommends"
import HomeRanking from "../pages/HomeRanking"
import HomeSongmenu from "../pages/HomeSongmenu"
import Category from "../pages/Category"
import Order from "../pages/Order"
import Detail from "../pages/Detail"
import User from "../pages/User"
import Notfound from "../pages/Notfound"
const routes = [
    {
        path: "/",
        element: <Navigate to="/home"/>
    },
    {
        path: "/home",
        element: <Home/>,
        children: [
            {
                path: "/home",
                element: <Navigate to="/home/recommend" />
            },
            {
                path: "/home/recommend",
                element: <HomeRecommends/>
            },
            {
                path: "/home/ranking",
                element: <HomeRanking/>
            },
            {
                path: "/home/songmenu",
                element: <HomeSongmenu/>
            },
        ]
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/category",
        element: <Category/>
    },
    {
        path: "/order",
        element: <Order/>
    },
    {
        path: "/detail/:id",
        element: <Detail/>
    },
    {
        path: "/user",
        element: <User/>
    },
    {
        path: "*",
        element: <Notfound/>
    },
]

export default routes