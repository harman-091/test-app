import React, { useState } from "react";

const NameChange =()=> {
    const [name,setName] = useState("John");
    function changeName(e){
        setName(e.target.value);
    }
    return (
        <div>
            <h1>Your Agent name is : </h1>
            <br></br>
            <h2>{name}</h2>
            <input type="text" value={name} onChange={changeName}/>
        </div>
        
    );

}
export default NameChange;
