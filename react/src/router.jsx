import React,{ReactDOM} from "react";
import {createBrowserRouter} from 'react-router-dom';
import DefaultComponent from "./components/DefaultComponents";
import LandingPage from "./view/LandingPage";
import ProductView from "./components/ProductView";
import SingleProductView from "./components/SingleProductView";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultComponent />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            {
                path: 'product/:category',
                element: <ProductView />,
            },
            {
                path: 'product/',
                element: <ProductView />,
            },
            {
                path: 'product/single/:id',
                element: <SingleProductView />,
            },
            {
                path: 'product/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            }
        ]
    }
]);

export default router;