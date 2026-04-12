import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { addValue, decrement, decrementValue, increment } from "../redux/reducer/counter-reducer";

function Counter() {
    const counter = useSelector((state)=>state.counter.count)
    const dispatcher = useDispatch()
    const [numValue, setNumValue] = useState('')
    const handleChange = (e) => {
        const value = e.target.value;
        setNumValue(value);
    }

    const handleAddCustomValue = () => {
        if (numValue !== '') {
            dispatcher(addValue(Number(numValue)));
        }
    };
    const handleRemoveCustomValue = () => {
        if (numValue !== '') {
            dispatcher(decrementValue(Number(numValue)));
        }
    };
    return (
        <div>
            <h1>Лічильник: {counter}</h1>
            <div>
                <button onClick={()=>dispatcher(increment())}>Increment</button>
                <button onClick={()=>dispatcher(decrement())}>Decrement</button>
                <button onClick={handleAddCustomValue}>Add value</button>
                <button onClick={handleRemoveCustomValue}>Decrement value</button>
                <input onChange={handleChange} value={numValue} type="number" placeholder="Enter value" />
            </div>
        </div>
    )
}

export default Counter;