import React, {useState,useCallback} from "react";
var funccount = new Set();
const Incredecre = () => {
    const [count,setCount] = useState(0);
    const [number,setNumber] = useState(0);

    const incrementCounter=useCallback(() => {
        setCount(count + 1);
    },[count]);
    const decrementCounter=useCallback(() => {
        setCount(count - 1);
    },[count]);
    
    funccount.add(incrementCounter);
    funccount.add(decrementCounter);

    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            textAlign:"center",
            justifyContent:"end",
            margin:"auto",
            marginTop:"20px",
            width:"350px",
            padding:"50px",
            height:"300px",
            fontSize:"20px",
            boxShadow:"0px 2px 8px 4px grey",
            borderRadius:"5px",
        }}>
            <h2 style={{color:"green"}}>GeeksforGeeks</h2>
            <h4></h4>
            <p>Count:{count}</p>
            <p>Function count:{funccount.size}</p>
            <button onClick={incrementCounter}> Increase </button>
            <button onClick={incrementCounter}> Decrease </button>
        </div>
    )
}
export default Incredecre;