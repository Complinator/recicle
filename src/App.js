import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './components/Pages/Home';
import Activities from './components/Pages/Activities';
import Points from './components/Pages/Points';
import Info from './components/Pages/Info';
import Marketplace from './components/Pages/Marketplace';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/activities' element={ <Activities /> } />
          <Route path='/points' element={ <Points /> } />
          <Route path='/info' element={ <Info /> } />
          <Route path='/market' element={ <Marketplace /> } />
          <Route path='*' element={ <Navigate to='/' replace /> } />
        </Routes>
      </div>
    </>
  );
}

export default App;
