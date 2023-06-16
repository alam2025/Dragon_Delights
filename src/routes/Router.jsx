import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog";
import Favourite from "../pages/Favourite";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";

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
                        element:<Favourite></Favourite>
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
                        element:<ChefRecipes></ChefRecipes>,
                        loader: ({params})=>fetch(`http://localhost:3000/chefs/${params.id}`)
                  }
            ]
      }
])

export default router