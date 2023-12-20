import { usePattern } from "./usePattern";

export const PatternCounter = () => {
    
    const { value, last, fncs } = usePattern();    

    return (
        <div>
            <h1>pattern: count is {value}</h1>
            <h2>last: {last}</h2>
            <button onClick={fncs.increment}>+</button>
            <button onClick={fncs.decrement}>-</button>
        </div>
    )
}
