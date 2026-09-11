import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import"./indexx.css";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(  // createRoot means ek parent root banao and html se div jiski id root h usko select kro and uske andr App ko render(show ) kro
 
 <>
 
 <App />   
  <ToastContainer position ="top-center"/>
 </>
)
