const Read = (props) => {
    const profiles = props.profiles;
    
 const updatedProfiles = profiles.map((profile, index) => {
   return (
    <li key = {index}>
        <span> {profile.name}</span> 
        
        </li>
   )
 })


  return (
    <div>
            <h1>User Data</h1>
        <ol>{updatedProfiles}</ol>
    </div>
  )
}

export default Read