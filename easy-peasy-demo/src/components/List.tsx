import { useStoreState } from "easy-peasy";
import { StoreT } from "../types/Store";
import { Item } from "./Item";


export const List = () => {
  const todos = useStoreState((state: StoreT) => state.todos);
  
  return (
    <>
      <h2>list</h2>
      <ul>
        { todos.map(x => <Item item={x} />)}
      </ul>
    </>
  );
};
