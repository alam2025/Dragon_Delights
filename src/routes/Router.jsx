import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog";
import Favourite from "../pages/Favourite";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import PrivateRoute from "./PrivateRoute";

const router= createBrowserRouter([
      {
            path:'/',
            element:<Main></Main>,
            errorElement:<ErrorPage></ErrorPage>,
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
                        element:<PrivateRoute><Favourite></Favourite></PrivateRoute>
                  },
                  {
                        path:'login',
                        element:<Login></Login>
                  },
                  {
                        path:'register',
                        element:<Register></Register>
                  },
                  {
                        path: 'chefInfo/:id',
                        element:<PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                        loader: ({params})=>fetch(`https://dragon-delights-server.vercel.app/chefs/${params.id}`)
                  }
            ]
      }
])

export default router