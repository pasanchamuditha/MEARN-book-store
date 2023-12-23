//what happend in the main.jsx and app.jsx and router.jsx
//When the application is loaded, 
//the main.jsx sets up the React application with React Router, specifying that the root URL path should render the App component.
// As a result, when users access the root URL of the application, they will see the "hello world" text rendered by the App component


//Main.jsx: This file usually acts as the entry point of your React application. 
//It's where you typically render your mai(n components) into the DOM using ReactDOM.render.
//This is where your entire app structure begins.

// main.jsx ekata awa ita passe router.jsx ekata giya eke thina route krle app .jsx ekata giya it passe app.jsx eke thiyna de render kra e render 
//krapu content eka apahu main.jsx eken dom document object model ekata dala index.html eka dive eken render kla.

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import router from './routers/router.jsx'
import AuthProvider from './contects/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode> is a component that helps with identifying potential problems in your code and highlighting them for debugging purposes.
  //<RouterProvider router={router} /> sets up the routing for the application using React Router. 
  //It wraps the entire application with routing capabilities provided by router.
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
     
  </React.StrictMode>,
)
