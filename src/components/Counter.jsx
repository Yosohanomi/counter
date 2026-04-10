import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/actions/actions";
import { decrement } from "../redux/actions/actions";
import { addValue } from "../redux/actions/actions";
import { decrementValue } from "../redux/actions/actions";
import { useState } from "react";

function Counter() {
    const counter = useSelector((state)=>state.count)
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