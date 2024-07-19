import { useState } from "react";

function Color() {
    // let col = 'red';
    const [col, changeColor] = useState('blue');
    const [value, setValue] = useState('Initial Value');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [count, setCount] = useState(0);
   
    return (
        <>
            <h1>My favourite color is {col}</h1>
            <button onClick={() => { changeColor('yellow') }}>Change color</button >
            <p>{col}</p>

            <h3>Count : {count}</h3>
            <button onClick={() => { setCount(count+1) }}>Increment</button>
            {/* <input type="text" value={value} onChange={handleChange} />
            <p>{value}</p> */}
        </>
    );
}

export default Color;