import React, {Fragment,useRef} from "react";

function UseREF(){
    const focusPoint=useRef(null);
    const onClickHandler=()=>{
        focusPoint.current.value="The quick brown fox jumps over the lazy dog";
        focusPoint.current.focus();
    };
    return (
        <Fragment>
            <div>
                <button onClick={onClickHandler}>ACTION</button>
            </div>
            <label>Click on Action</label><br/>
            <textarea ref={focusPoint}/>
        </Fragment>
    )
}
export default UseREF;