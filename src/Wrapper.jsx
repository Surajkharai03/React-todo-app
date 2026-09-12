import { createContext, useState } from "react";


 export const todocontext = createContext(null);


const wrapper = (props) => { 
   const [todos, settodos] = useState([                            //idhar universal data banana h jis data ko hme apne pure app m failana h
    {id:1, title:"Giving up not in the blood", isCompleted:false }
  ])

// we send array beacuse we have to pass multiple values

  return  <todocontext.Provider value={[todos,settodos]}> 

  {/*  iska mtlv ye h ki props.children ke andr hm is value ko khi se bhi access kr skte h */}

    {props.children}   
    </todocontext.Provider>

};

export default wrapper;  