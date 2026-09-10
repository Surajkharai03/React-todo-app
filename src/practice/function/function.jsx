const App = () => {

  // here js logic will be written 

  // non-parameterized function 

  const handleclick = () => {
    alert("Button Clicked")
  }
  const handleparamclick = (msg) => {
    alert(msg);
  }

  // const wrapperhandler = () => handleparamclick("Mai fir bhi tumko chahunga")   // not paremeterized function ke andr parameterized function ko pass kr diya and arrow function m ek line likhi h so hm curly brackets hta skte h
  
  return (
    <>
    <h1>{5-2}</h1>
    <div>Hello</div>
    <div>World</div>
    {/* // we do not call dunction here we only pass the refrence here(handleclick) */}
    
    <button onClick={handleclick}>Click</button>
    <button onClick= {() =>handleparamclick("Mai fir bhi tumko chahunga")}>Click(param)</button>  
    </>                    
     // for multiple div we can use empty tags(<>) or fragment tag 000000000000
     // in React in curly brackets anything we write ye chala deta h usko isliye hmne  function call nhi kiya only refrence pass kiya
    
  )
}

export default App;

// a function component will always return HTML for Eg: Hello World
// we can not write anything after return
// we can only return single data/entity/variable/value
// there must be single return in a function and that must be the last statement