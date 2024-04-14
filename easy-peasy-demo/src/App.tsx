import { StoreProvider } from 'easy-peasy'
import { Add } from './components/Add'
import { List } from './components/List'
import { store } from './store'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {

  return (
    <StoreProvider store={store}>
      <Wrapper>
        <List />
        <Add />
      </Wrapper>
    </StoreProvider>
  )
}

export default App
