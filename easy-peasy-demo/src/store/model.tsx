import { action } from "easy-peasy";
import { StoreT } from "../types/Store";

export const model: StoreT = {
    todos: [
        {
            id: 1,
            content: 'first todo',
            completed: false
        },
        {
            id: 2,
            content: 'second todo',
            completed: true
        },
        {
            id: 3,
            content: 'third todo',
            completed: false
        },
    ],
    addTodo: action((state, payload) => {
        const randomId = Number(Math.random()
                            .toString()
                            .slice(-4));
                            
        state.todos = [...state.todos, { id: randomId, content: payload, completed: false }];
    })
}