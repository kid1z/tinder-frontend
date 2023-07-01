import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./error-page";
import SpinWheel from './routes/spin-wheel';
import Demo from './routes/Demo'
import Post from './Post';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Demo />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
  },
  {
    path: "/spin-wheel",
    element: <SpinWheel />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <Post />,
    errorElement: <ErrorPage />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
