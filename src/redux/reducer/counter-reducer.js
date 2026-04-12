import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     count: 0
// }

export const counter = createSlice({
    name: "counter",
    initialState: {count: 0,},
    reducers: {
        increment:(state)=>{
            state.count +=1
        },

        decrement:(state)=>{
            state.count -=1
        },

        addValue:(state, action)=> {
            state.count +=action.payload
        },

        decrementValue:(state, action)=>{
            state.count -=action.payload
        },
    },
})

export const {increment, decrement, addValue, decrementValue} = counter.actions

export default counter.reducer

// switch(action.type) {
//     case "counter/increment":
//         return {...state, count: state.count + 1};
//     case "counter/decrement":
//         return {...state, count: state.count - 1};
//     case "counter/addValue":
//         return {...state, count: state.count + action.payload};
//     case "counter/decrementValue":
//         return {...state, count: state.count - action.payload};
//     default: 
//         return state;
// }
// export const increment = () => (
//     {
//         type: "counter/increment"
//     }
// )

// export const decrement = () => (
//     {
//         type: "counter/decrement"
//     }
// )

// export const addValue = (value) => (
//     {
//         type: "counter/addValue",
//         payload: value
//     }
// )

// export const decrementValue = (value) => (
//     {
//         type: "counter/decrementValue",
//         payload: value
//     }
// )

// import { createStore } from "redux";
// import { counterReducer } from "../counter-reducer";

// export const store = createStore(counterReducer)

