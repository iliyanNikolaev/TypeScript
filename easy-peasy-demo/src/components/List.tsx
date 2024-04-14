import { useStoreState } from "../hooks";
import { Item } from "./Item";


export const List = () => {
  const todos = useStoreState((state) => state.todos);
  
  return (
    <>
      <h2>list</h2>
      <ul>
        { todos.map(x => <Item item={x} />)}
      </ul>
    </>
  );
};
