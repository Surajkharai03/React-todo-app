import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import"./indexx.css";

createRoot(document.getElementById('root')).render(  // createRoot means ek parent root banao and html se div jiski id root h usko select kro and uske andr App ko render(show ) kro
 <App />    // function call in the form of react(self closing tag)
)
