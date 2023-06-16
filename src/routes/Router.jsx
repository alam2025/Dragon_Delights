import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog";
import Favourite from "../pages/Favourite";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

const router= createBrowserRouter([
      {
            path:'/',
            element:<Main></Main>,
            children:[
                  {
                        path:'/',
                        element:<Home></Home>
                  },
                  {
                        path:'blog',
                        element:<Blog></Blog>
                  },
                  {
                        path:'favourite',
                        element:<Favourite></Favourite>
                  },
                  {
                        path:'login',
                        element:<Login></Login>
                  },
                  {
                        path:'register',
                        element:<Register></Register>
                  }
            ]
      }
])

export default router