import React from 'react'
import Header from './../sections/header/Header';
import Footer from '../sections/footer/Footer';

const Layout = ({children}) => {
  return (
    <>
    <header className="min-h-[10vh]">
        <Header />
    </header>
    <main className="min-h-[80vh]">
        {children}
    </main>
    <footer className="min-h-[10vh]">
        <Footer />
    </footer>
    </>
  )
}

export default Layout