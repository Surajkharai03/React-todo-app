import { useState } from "react";
import { nanoid } from "nanoid"

const Createe = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;


   const [title, settitle] = useState("");


 const SubmitHandler = (e) =>{
    e.preventDefault();
    

    const newtodo ={     // this is a object
      id: nanoid(),  // nanoid ek package h jo npm m store h and it generates the random id
      title: title,
      isCompleted: false,
    }


  // purane data m naya data daal diya 

  // settodos([...todos, newtodo])  or 

    const copytodos = [...todos];   //  created copy(refrence) of original data
    copytodos.push(newtodo)   // original data ki copy m naya data push kr diya 
    settodos(copytodos)  // then settodoes m copytodos ka data daal diya
  
    settitle("")   // sv hone ke baad title ko last m khali kr dena h

  }
  return (
  <div className="w-[60%] p-10 ">
        <h1 className=" mb-10 text-5xl font-thin">
          
          Set <span className="text-red-400">Reminders</span> for <br/>tasks</h1>

   <form onSubmit={SubmitHandler}>
    <input
      className=" p-2 border-b w-[50%] text-2xl font-thin outline-0"
    onChange={(e) => settitle(e.target.value)}
    value ={title}
   type="text" placeholder="title"/>
    <br />
    <br/>


   
    <button className=" mt-5 text-xl px-10 py-2 border border rounded">Create Todo</button>
   </form>
    </div>
  )
}

export default Createe