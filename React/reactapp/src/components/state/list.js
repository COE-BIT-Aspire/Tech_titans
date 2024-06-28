import { useState } from "react";

function List() {

    const [list, setList] = useState([]);
    const [count, setCount] = useState(1);

    function addItem() {
        const itemName = 'item ' + count;
        setList((previousState) => { return [...previousState, itemName] });
        setCount((previousState) => {return previousState + 1 });
    }
    return (
        <div>
            <h1>The List is</h1>
            <button onClick={addItem}>Add items</button>
            
            <ul>{
                list.map((ele,index)=><li key={index}>{ele}</li>)
            }     
            </ul>
        </div>
    );
}
export default List;