import { Todo } from "../types/Todo";
import { Item } from "./Item";

export const List = () => {
  const todos: Todo[] = [
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
  ];
  return (
    <>
      <h2>list</h2>
      <ul>
        {todos.map(x => <Item item={x} />)}
      </ul>
    </>
  )
}
