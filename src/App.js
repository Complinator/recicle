import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppNavbar from './components/Layout/Navbar';
import Home from './components/Pages/Home';
import Activities from './components/Pages/Activities';
import Points from './components/Pages/Points';
import Info from './components/Pages/Info';
import Marketplace from './components/Pages/Marketplace';
import Footer from './components/Layout/Footer';
import AboutUs from './components/Pages/AboutUs';
import { AuthProvider } from './context/Auth';
import { LoginPage, RegisterPage } from './components/Pages/Auth';

function App() {
  return (
    <AuthProvider>
      <AppNavbar />
      <div>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/news' element={ <Activities /> } />
          <Route path='/points' element={ <Points /> } />
          <Route path='/aboutus' element={ <AboutUs /> } />
          <Route path='/info' element={ <Info /> } />
          <Route path='/market' element={ <Marketplace /> } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='*' element={ <Navigate to='/' replace /> } />
        </Routes>
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default App;
