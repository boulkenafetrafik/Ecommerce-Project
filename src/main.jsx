// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './home/Home.jsx'
import Shop from './Shop/Shop.jsx'
import SignUP from './home/signup.jsx'
import './index.css'
import Login from './home/Login.jsx'
import SingleProduct from './Shop/SingleProduct.jsx'
import CartPage from './Shop/CartPage.jsx'
// import Footer from './home/Footer.jsx'

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './blog/Blog.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
  { path:"/", element:<Home /> },
{ path:"/blog" , element:<Blog />  },
{path:"/shop", element:<Shop />},
{path:"/signup", element:<SignUP/>},
{path:"/Login", element:<Login/>},
{path:"shop/:id",element:<SingleProduct/>},
{path:"/cart-page",element:<CartPage />},
// {path:"/footer",element:<Footer />}

    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />

)
