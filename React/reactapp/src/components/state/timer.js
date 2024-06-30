import { useEffect,useState } from "react";

function Timer() {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log('Timer component mounted');
    //     checkCount();
    // }, [count]);

    useEffect(() => {
        //setCount(1);
        setTimeout(() => {
            setCount(count + 1);
        }, 5000);
    });

    function checkCount() {
        if(count === 10) {
            setCount(1);
        }
    }
        
    return (
        <div>
            <h1>Timer: {count}</  h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>

        </div>
    );
}

export default Timer;