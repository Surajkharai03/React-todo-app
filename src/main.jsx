import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import"./indexx.css";
import { ToastContainer } from 'react-toastify';
import Wrapper from './Wrapper.jsx';

createRoot(document.getElementById('root')).render(
<Wrapper>
  <App/>
  <ToastContainer position='top-center'/>
</Wrapper>)  
    
    
    
    
    
   




    // wrapper ek aesa component h jo props m component le rha h aur return bhi ek component kr rha h
    
 
    // createRoot means ek parent root banao and html se div jiski id root h usko select kro and uske andr App ko render(show ) kro









//  <>
 
//  <App />   
//   <ToastContainer position ="top-center"/>
//  </>
// 
