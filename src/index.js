import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import {Kontakt, Referenzen} from "./components/index"
import ReferencesDetails from "./components/ReferencesDetails";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Partners from "./components/Partners";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/kontakt",
        element: <Kontakt />
    },
    {
        path: "/referenzen",
        element: <Referenzen/>
    },
    {
        path: "/referenzen/:id",
        element: <Referenzen/>
    },
    {
        path: "/details",
        element: <ReferencesDetails/>
    },
    {
        path: "/partner",
        element: <Partners/>
    }


])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);