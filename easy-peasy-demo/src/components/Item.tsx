import { useStoreActions } from "../hooks"
import { Todo } from "../types/Todo"
export const Item = ({
  item
}: {
  item: Todo
}) => {
  const toggleTodo = useStoreActions(state => state.toggleTodo);
  const deleteTodo = useStoreActions(state => state.deleteTodo);
  return (
    <>
      <li>
        <span>
          {item.content}: {item.completed.toString()}
        </span>
        <button onClick={() => toggleTodo(item.id)}>toggle</button>
        <button onClick={() => deleteTodo(item.id)}>delete</button>
      </li>
    </>
  )
}
