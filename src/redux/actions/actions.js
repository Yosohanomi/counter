export const increment = () => (
    {
        type: "counter/increment"
    }
)

export const decrement = () => (
    {
        type: "counter/decrement"
    }
)

export const addValue = (value) => (
    {
        type: "counter/addValue",
        payload: value
    }
)

export const decrementValue = (value) => (
    {
        type: "counter/decrementValue",
        payload: value
    }
)