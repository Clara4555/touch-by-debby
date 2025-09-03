// Updated Layout.jsx with BackToTop
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 transition-colors duration-500">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;