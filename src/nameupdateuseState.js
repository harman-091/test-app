import React,{ useState } from "react";

const NameUpdate =()=> {
    const [name,updateName] = useState("John");
    const handleUpdate =()=>{
        updateName("Jane");
    }
    return (
        <div>
            <button style={{margin:100}} onClick={()=>{handleUpdate()}}>
                Update Name
            </button>
            { name }
        </div>
        
    );

}
export default NameUpdate;