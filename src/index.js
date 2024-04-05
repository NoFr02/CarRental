import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { rootReducer } from './utils/reducer';
import { configureStore } from '@reduxjs/toolkit';
import "./index.css"

import App from './app'
import Overview from './pages/overview';
import Details from './pages/details';
import Account from './pages/account';
import MyCars from './pages/mycars';
import { Provider } from 'react-redux';
import Logoutpage from './pages/logoutpage';
import History from './pages/history';
import { AlertProvider } from './utils/AlertPopUp/alertcontext';

//creates router wich reacts for different URL-Routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Overview />
            },
            {
                path: "/details/:carId",
                element: <Details />
            },
            {
                path: '/account',
                element: <Account />
            },
            {
                path: '/my_cars',
                element: <MyCars />
            },
            {
                path: '/logout',
                element: <Logoutpage />
            },
            {
                path: '/history',
                element: <History />
            }
        ]
    }])

//get root div where every other div gets rendered in
const root = createRoot(document.getElementById("root"))

//create the store with all the reducers
const store = configureStore({ reducer: rootReducer })

root.render(
    <StrictMode>
        <AlertProvider>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </AlertProvider>
    </StrictMode>

)