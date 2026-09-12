const Create = (props) => {
    
 const [fullname, setfullname] = useState("")
 const [age, setage] = useState(18)
 
       
 const SubmitHandler = (e) => {
    e.preventDefault();     // for from submit bhi ho jaye or page refresh bhi na ho
    const newuser ={fullname, age} // isme hmare useState ki value thi  
   console.log(newuser);  //api - backend - database m hm ye data bhej skte h

   // set the user in the setusers

   
 } 
  return (
    <div>
             <h1>Register User</h1>
        <form onSubmit={SubmitHandler}>
            <input 
            onChange ={(e) => setfullname(e.target.value)}  // onChange ke jriye value react m save ho jati h
            value={fullname}                                // value attribute ke jriye React hme value dikhati h
            
            type="text" placeholder="Full Name"></input>





            <input
             onChange ={(e) => setage(e.target.value)}
            value={age}
            
             type="number" placeholder="Age"></input>
            <button>Submit</button>


        </form>
    </div>
  )
}

export default Create