import React from 'react'
import Header from './../sections/header/Header';
import Footer from '../sections/footer/Footer';

const Layout = ({children}) => {
  return (
    <>
    <div className="content font-opensans">
        <header>
            <Header />
        </header>
        <main className="min-h-[80vh]">
            {children}
        </main>
        <footer className="min-h-[10vh]">
            <Footer />
        </footer>
    </div>
    </>
  )
}

export default Layout