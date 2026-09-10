const json = () => {
    const profiles = [
        { name: "Suraj", age: 21 },
        { name: "Sagar", age: 22 },
        { name: "divii", age: 20 },
    ]

 const updatedProfiles = profiles.map((profile, index) => {
   return (
    <li key = {index}>
        <span>Name: {profile.name}</span> |
        <small>Age: {profile.age}</small>
    </li>
   )
 })


  return (
    <div>
        <h1>Rendering Json</h1>
        <ol>{updatedProfiles}</ol>
    </div>
  )
}

export default json