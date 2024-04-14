import { FormEvent, useState } from "react"
import { useStoreActions } from "../hooks";

export const Add = () => {
  const [content, setContent] = useState('');
  const addTodo = useStoreActions(state => state.addTodo)

  const addFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!content) {
      return alert('invalid data');
    }
    addTodo(content);
    setContent('');
  }

  return (
    <form onSubmit={ addFormSubmit }>
      <h2>add new item</h2>
      <input value={content} onChange={(e) => setContent(e.target.value)} type="text" placeholder="content..." />
      <button>Create</button>
    </form>
  )
}
