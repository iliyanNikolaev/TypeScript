import { Action } from "easy-peasy"
import { Todo } from "./Todo"

export interface StoreT {
    todos: Todo[],
    addTodo: Action<this, string>,
    toggleTodo: Action<this, number>,
    deleteTodo: Action<this, number>
}