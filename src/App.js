import React, {useCallback, useState} from "react";

function App() {



    const [count, setCount] = useState(1);

    const getSquare = useCallback((value)=>{
        /**do something*/
        return value * value
    },[])


  return (
    <div className="App">
        <h1>this is count: {count}</h1>
        <button onClick={()=>{
            setCount(count+1)
        }}>+1</button>
        <br/>
        <p>get square: {getSquare(count)}</p>
    </div>
  );
}

export default App;
