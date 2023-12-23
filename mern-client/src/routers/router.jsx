//THis file usually handles the routing logic in your React application.
//It might use a router library like React Router to manage different views or pages in your app.
//It defines the mapping between URLs and the components to be rendered based on those URLs.
// rect compnment should be upper case letter
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../componments/About";
import Blog from "../componments/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import Signup from "../componments/Signup";
import Login from "../componments/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../componments/Logout";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
           path:"/",
           element: <Home/>
        },
      {
        path:"/shop",
           element: <Shop/>
      },
      {
        path:"/about",
           element: <About/>
      },
      {
        path:"/blog",
           element: <Blog/>
      }, 
      {
        // This file appears to handle routing in your React application using React Router.
        //It defines a route for /book/:id, where :id is a placeholder for the specific book's ID.
        //When a user navigates to /book/:id, it loads the SingleBook component and uses a loader function to fetch book data from the backend based on the id parameter
        // next--> singleBook.jsx
        path:"/book/:id",
        element: <SingleBook/>,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
      }
    
    ]
    },

    {
      path:"/admin/dashboard",
      element:<DashboardLayout/>,
      children: [

       {
        path:"/admin/dashboard",
       element:<PrivateRoute><Dashboard/></PrivateRoute>
       },
       {
        path:"/admin/dashboard/upload",
        element:<UploadBook/>
       },
       {
        path:"/admin/dashboard/manage",
        element:<ManageBook/>

       },
       {
        path:"/admin/dashboard/edit-book/:id",
        element:<EditBook/>,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
       }
        

      ]
    },
    {
      path:"sign-up",
      element: <Signup/>
    },
    {

      path:"login",
      element: <Login/>
    },
    {
      path:"logout",
      element:<Logout/>

    }

  ]);

  export default router;
