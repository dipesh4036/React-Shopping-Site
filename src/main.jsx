import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { UserProvider } from './context/Products.jsx' 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <UserProvider>
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
  </UserProvider>
)
