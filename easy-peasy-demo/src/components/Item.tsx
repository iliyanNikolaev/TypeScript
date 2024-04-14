import { useStoreActions } from "../hooks"
import { Todo } from "../types/Todo"

export const Item = ({
  item
}: {
  item: Todo
}) => {

  const { toggleTodo, deleteTodo } = useStoreActions(state => state);

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
