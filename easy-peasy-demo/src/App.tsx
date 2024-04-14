import { StoreProvider } from 'easy-peasy'
import './App.css'
import { Add } from './components/Add'
import { List } from './components/List'
import { store } from './store'


function App() {
  
  return (
    <StoreProvider store={store}>
      <List />
      <Add />
    </StoreProvider>
  )
}

export default App
