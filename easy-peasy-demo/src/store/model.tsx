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
    addTodo: action((state, todoTextContent) => {
        const randomId = Number(Math.random()
                            .toString()
                            .slice(-4));
                            
        state.todos = [...state.todos, { id: randomId, content: todoTextContent, completed: false }];
    }),
    toggleTodo: action((state, todoId) => {
        const currentTodo = state.todos.find(x => x.id == todoId);
        if(currentTodo){
            const currentIndex = state.todos.findIndex(x => x.id == todoId);
            currentTodo.completed = !currentTodo.completed;
            state.todos.splice(currentIndex, 1, currentTodo);
        }
    }),
    deleteTodo: action((state, todoId) => {
        state.todos = state.todos.filter(x => x.id != todoId);
    })
}