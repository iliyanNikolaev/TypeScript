// npx json-server -w data/data.json -p 6161

import { Link, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';

function App() {


  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
