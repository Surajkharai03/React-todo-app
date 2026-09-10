const usestate = () => {
    let n = 12;  // number
    let s = 'hello world' // string
    let b = true;      // boolean / reserved keyword ko hm directly apne webpage/view m nhi dikha skte
    let un = undefined;
    let nu = null;
    let arr = [12, "Hello", true, null, undefined, "hii"];
    let obj = {name:"divii", age: 89};
  return (
    <div>
        <h1>Datatypes</h1>
        <h2> Number: {n}</h2>
        <h2>String: {s}</h2>
        <h2>Boolean: {b}</h2>
        <h2>Undefined:{un}</h2>
        <h2>Null:{nu}</h2>  
        <h2>Array:{arr}</h2>
        <h2>Object:{obj.name} |{obj.age}</h2>
    
    </div>
  )
}

export default usestate