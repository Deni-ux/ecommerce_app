import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

//layout to wrap the website. it has access to a prop called children
const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>Deni's Online Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout;