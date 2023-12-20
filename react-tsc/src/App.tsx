import { Routes, Route, Link } from 'react-router-dom';

import { Dashboard } from "./components/Dashboard";
import { Home } from './components/Home';
import { Login } from './components/Login';
import { ChangeTheme } from './components/ChangeTheme';
import { ReducerDemo } from './components/ReducerDemo';
import { PatternCounter } from './components/youtube-solid-react/PatternCounter';

function App() {

  return (
    <>
    <nav className='navigation'>
      <p>Hello, Windows 95</p>
      <Link to='/'>Home</Link>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/change-theme'>Change theme</Link>
      <Link to='/login'>Login</Link>
      <Link to='/usereducer'>useReducer demo</Link>
      <Link to='/pattern'>Pattern</Link>
    </nav>
    
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/change-theme' element={<ChangeTheme />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/usereducer' element={<ReducerDemo />}></Route>
      <Route path='/pattern' element={<PatternCounter />}></Route>
    </Routes>
    </>
  )
}

export default App
