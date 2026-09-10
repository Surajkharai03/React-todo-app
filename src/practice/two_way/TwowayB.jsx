import { useState } from "react"

const App = () => {
  const [todos, settodos] = useState([
    {id:1, title:"Kaam krte rho", isCompleted:false }
  ])

  const [title, settitle] = useState("")
  const [completed, setcompleted] = useState(true)
  const [gender, setgender] = useState("male")
  const [city, setcity] = useState("dehradun")

  return (
    <div>
   <h1>Create Tasks</h1>
   <form>
    <input
    onChange={(e) => settitle(e.target.value)}
    value ={title}
   type="text" placeholder="title"/>
    <br />
    <br/>


    <input
    checked ={completed}
    onChange={(e) => setcompleted(e.target.checked)}
    type="checkbox"/>Completed
    <br/>
    <br/>


    <input
    value ="male"
    onChange={(e) => setgender(e.target.value)}
    checked ={gender == "male" && true}
    type="radio"/>
    male

     <input
    value ="female"
    onChange={(e) => setgender(e.target.value)}
    checked ={gender == "female" && true}
    type="radio"/>
    female
    <br/>
    <br/>


   <select value= {city} onChange={(e) => setcity(e.target.value)}
    >
   
    <option value="delhi">Delhi</option>
     <option value="mumbai">Mumbai</option>
      <option value="dehradun">Dehradun</option>
   </select>
   <br/>
   <br/>
   
    <button>Create Todo</button>
   </form>
    </div>
  )
}




export default App