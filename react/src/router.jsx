import React,{ReactDOM} from "react";
import {createBrowserRouter} from 'react-router-dom';
import DefaultComponent from "./components/DefaultComponents";
import LandingPage from "./view/LandingPage";
import ProductView from "./components/ProductView";
import SingleProductView from "./components/SingleProductView";

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
            }
        ]
    }
]);

export default router;