import { createStore } from "easy-peasy";

export const store = createStore({
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
    ]
});