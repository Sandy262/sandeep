import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home';
import Aboutus from './Aboutus';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import { createBrowserRouter,RouterProvider } from "react-router-dom"
const router=createBrowserRouter([
    // {
    //     path:"/",
    //     element:<div>Hello world!</div>
    // },
    // {
    //     path:"/Home",
    //     //element:<div><h1>Home Chupistha</h1><h2>Ma intlo kitchen undi</h2></div>
    //     element:<Home></Home>
    // },
    // {
    //     path:"/Aboutus",
    //     element:<Aboutus></Aboutus>
    // }
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"/home",
                element:<Home></Home>
            },
            {
                path:"/Aboutus",
                element:<Aboutus></Aboutus>
                },
            {
                path:"/add/:a/:b",
                element:<h3>Parameterized routing</h3>
            }
        ]
    },
    // {
    //     path:"/home",
    //     element:<Home></Home>
    // }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
