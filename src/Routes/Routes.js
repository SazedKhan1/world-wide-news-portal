import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import News from "../pages/News/News/News";
import Category from "../pages/Category/Category";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/news/:id',
                element: <News></News>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            }
        ]
    }

])