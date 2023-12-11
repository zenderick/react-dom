import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog, { LoaderBlog } from "../pages/Blog";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic"
import Posts, { LoaderPost } from "../pages/Posts";


 export const Router = createBrowserRouter([
    {
        path:'/',
        element: <LayoutPublic/>,
        errorElement: <NotFound/>,
        children: [
            { //Este otro children es para que el error aparezca el layout
                errorElement: <NotFound/>,
                children: [
                    {
                        index: true,
                        element: <Home/>,
                    },
                    {
                        path:'/about',
                        element: <About/>,
                    },
                    {
                        path:'/blog',
                        element: <Blog/>,
                        loader: LoaderBlog,
                    },
                    {
                        path:'/blog/:id',
                        element:<Posts/>,
                        loader: LoaderPost,
                    },
                ]
            }
           
        ]
    }
 ])
