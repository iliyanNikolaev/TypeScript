// --- JS Syntax ---
// import { useReducer } from "react"

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'INCREMENT': return { count: state.count + 1 }
//         case 'DECREMENT': return { count: state.count - 1 }
//         case 'RESET': return { count: 0 }
//         default: return state
//     }
// }

// export const ReducerCounter = () => {
//     const [state, dispatch] = useReducer(reducer, { count: 0 });

//     return (
//         <section className="view-section">
//             <h1>useReducer demo counter {state.count}</h1>
//             <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
//             <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
//             <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
//         </section>
//     )
// }

import { useReducer } from "react";

type ActionType = { type: 'INCREMENT' | 'DECREMENT' | 'RESET' };
type StateType = { count: number };

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREMENT': return { count: state.count + 1 };
        case 'DECREMENT': return { count: state.count - 1 };
        case 'RESET': return { count: 0 };
        default: return state;
    }
}

export const ReducerDemo = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <section className="view-section">
            <h1>useReducer demo counter {state.count}</h1>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        </section>
    )
}
