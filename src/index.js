import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider

} from 'react-router-dom'
import {ThemeProvider, THEMES} from './contexts/ThemeContext'
import {Login} from './pages/login'
import Patients from './pages/patients';
import History from './pages/history'
import Layout from './pages/layout';
import { Patient } from './pages/Patient';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'patients',
        element:<Patients/>
      },
      {
        path:'history',
        element:<History/>
      },
      {
        path:'patients/:id',
        element:<Patient/>
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>
  }
  
])
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{
      ...THEMES.light
    }}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
