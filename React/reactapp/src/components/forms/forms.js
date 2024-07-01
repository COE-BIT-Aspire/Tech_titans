import { useState } from "react";

function Form() {

    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    // const [email, setEmail] = useState('');
    //name=document.getElementById('fname').value;

    const [inputs, setInput] = useState({phone:"+91-"}, {country:"Select"});//this decl is for object values

    function handleSubmit(event) {
        event.preventDefault();
        alert('A name was submitted: ' + inputs.name + ' ' + inputs.age + ' ' + inputs.email);  
    }

    function handleChnage(event) {
        setInput((previous) => { return { ...previous, [event.target.name]: event.target.value } });//event.target.name is the name property of the input field and it is assigned to the key of the object from event.target.value
    }//this fn can be used  in onChange event of input field to avoid repetition of code
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> Enter your name:</label>
                <input type="text" name="fname" onChange={(event) => { setInput((previous) => { return {...previous, name: event.target.value } })}}/> 
                <br/>
                <label> Enter your age:</label>
                <input type="number" name="age" onChange={(event) => { setInput((previous) => { return { ...previous, age: event.target.value } })}}/> 
                <br/>
                <label> Enter your email:</label>
                <input type="email" name="mail" onChange={(event) => { setInput((previous) => { return { ...previous, email: event.target.value } })}}/> 
                <br/>
                <label> Enter your ph.no:</label>
                <input type="text" name="phone" value={inputs.phone} onChange={(event) => { setInput((previous) => { return {...previous, phone: event.target.value } })}}/> 
                <br />
                <label>Select your country</label>
                <select name="country" onChange={handleChnage} value={inputs.country}> 
                    <option value="">Select</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>  
                </select>
                <br/><br/>
                <input type="submit" value="Submit" />
            </form>
            {/* <p>{name}</p>
            <p>{age}</p>
            <p>{email}</p> */}
            <p>{inputs.name}</p>
            <p>{inputs.age}</p>
            <p>{inputs.email}</p>
        </>
    );
}

export default Form;