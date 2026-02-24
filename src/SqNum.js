import React ,{useState} from "react";

function SqNum(){
    const [number,setNumber] = useState(0);
    const squaredNum=squareNum(number);

    const onChangeHandler=(e)=>{setNumber(e.target.value);
    };
    return (
        <div className="App"><h1>Welcome</h1>
        <input type="number" placeholder="Enter a number"
        value={number} onChange={onChangeHandler}>

        </input>
        <div>Output :{squaredNum}</div>
        </div>
    )
}
function squareNum(number){
    console.log("Squaring will be done!");
    return Math.pow(number, 2);    
}
export default SqNum;