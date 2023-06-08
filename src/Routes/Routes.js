import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import News from "../pages/News/News/News";
import Category from "../pages/Category/Category";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Shared/Register/Register";
import PrivateRouter from "./PrivateRouter";
import TermsAndCondition from "../pages/others/TermsAndCondititon/TermsAndCondition";
import Profile from "../pages/Shared/Profile/Profile";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/news`)
            },

            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRouter><News></News></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)

            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/profile',
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            }
        ]
    }

])