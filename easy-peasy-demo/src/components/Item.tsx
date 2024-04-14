import { Todo } from "../types/Todo"
export const Item = ({
  item
}: {
  item: Todo
}) => {
  return (
    <>
      <li>{item.content}: {item.completed.toString()} <button>toggle</button></li>
    </>
  )
}
