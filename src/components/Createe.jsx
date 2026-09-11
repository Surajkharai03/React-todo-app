import { useForm } from "react-hook-form";
import {toast} from "react-toastify";
import { nanoid } from "nanoid";

const Createe = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;


     const {
      register,    // for two way binding
       handleSubmit,  // form submit krne ke liye
        reset,        // form reset krne ke liye
         formState: { errors },   // error ko find krne ke liye
         } =useForm();


   const SubmitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid()
    
   const copytodos = [...todos];
   copytodos.push(data);
   settodos(copytodos);


   toast.success("Todo created!")

   reset();
   
    }
    
    


  return (
  <div className="w-[60%] p-10 ">
        <h1 className=" mb-10 text-5xl font-thin">
          
          Set <span className="text-red-400">Reminders</span> for <br/>tasks</h1>

   <form onSubmit={handleSubmit(SubmitHandler)}>
    <input

    {...register("title", {
      required: "title can not be empty",
    })}
      className=" p-2 border-b w-[50%] text-2xl font-thin outline-0"
     type="text" placeholder="title"/>

{/* 
     {errors && errors.title && errors.title.message && (
      <small>{errors.title.message}</small>
      )} */}
    
     <small className="block font-thin text-red-400 mt-2">{errors?.title?.message}</small> 
    <br />
    <br/>


   
    <button className=" mt-5 text-xl px-10 py-2 border border rounded">Create Todo</button>
   </form>
    </div>
  )
}

export default Createe