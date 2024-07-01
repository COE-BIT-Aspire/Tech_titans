import { useState } from "react";

function Form() {

    const [name, setName] = useState('');
    //name=document.getElementById('fname').value;
    
    return (
        <>
        <form>
            <label> Enter your name:
                <input type="text" id="fname" onChange={(event)=>{setName(event.target.value)}}/> 
            </label>
        </form>
            <p>{name}</p>
            </>
    );
}

export default Form;