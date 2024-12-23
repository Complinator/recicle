import React from 'react';
import { useLocation } from 'react-router-dom';
import AppNavbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const authPages = ['/auth'];
  const isAuthPage = authPages.includes(location.pathname);

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <>
      <AppNavbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;