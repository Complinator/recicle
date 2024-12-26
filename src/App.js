import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Pages/Home';
import Activities from './components/Pages/Activities';
import Points from './components/Pages/Points';
import Info from './components/Pages/Info';
import Marketplace from './components/Pages/Marketplace';
import AboutUs from './components/Pages/AboutUs';
import { AuthProvider } from './context/Auth';
import Auth from './components/Pages/Auth';
import Layout from './context/Layout';
import ContactUs from './components/Pages/ContactUs';

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<Activities />} />
          <Route path='/points' element={<Points />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/info' element={<Info />} />
          <Route path='/market' element={<Marketplace />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;