

import { useState } from "react";
import Createe from "./components/Createe"
import Readd from "./components/Readd"

const App = () => {
  const [todos, settodos] = useState([
    {id:1, title:"Giving up not in the blood", isCompleted:false }
  ])

return (
    <div className=" text-white flex w-screen h-screen bg-gray-700 p=10">
     <Createe todos={todos} settodos={settodos}/>
     <Readd todos={todos} settodos={settodos}/>
  
    </div>
  )
}




export default App