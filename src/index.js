import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Patients from './components/FPatients';
import History from './pages/history';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'
import Layout from './pages/layout';
import Patient from './pages/patient';

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
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
