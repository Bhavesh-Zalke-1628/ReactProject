import { useState } from "react";
function Counter() {

    let [counter, setCounter] = useState(10)
    // let counter = 100
  
    function addValue() {
      // counter = counter+1 
      if (counter < 20) {
        setCounter(counter + 1);
      }
      else{
        alert("Limit reached")
      }
    }
  
  
    function removeValue() {
      
      if (counter >0) {
        setCounter(counter - 1);
      }
      else{
        alert("Negative number")
      }
    }
    return (
      <>
        <h2>Counter Value = {counter}</h2>
        <button
          onClick={addValue}
        >Add Value {counter}</button>
        <br />
        <button
          onClick={removeValue}
        >remove Value {counter}</button>
      </>
    )
  }

  export default Counter;