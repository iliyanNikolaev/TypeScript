// npx json-server -w data/data.json -p 6161

import { Link, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';

function App() {


  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
