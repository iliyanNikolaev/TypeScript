import { Link, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';

function App() {

  return (
    <>
      <nav>
        <Link to='/'></Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
