import React from 'react'
// Pages Components
import Home from './pages/home/Home';
import Article from './pages/article/Article';
import AboutUs from './pages/about-us/AboutUs';
import ContactUs from './pages/contact-us/ContactUs';
import Faqs from './pages/faqs/Faqs';
import PageNotFound from './pages/page-not-found/PageNotFound';
import Pricing from './pages/pricing/Pricing';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';

// React Router DOM
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Home/>}></Route>
        <Route path={`/article`} element={<Article/>}></Route>
        <Route path={`/about`} element={<AboutUs/>}></Route>
        <Route path={`/contact`} element={<ContactUs/>}></Route>
        <Route path={`/pricing`} element={<Pricing/>}></Route>
        <Route path={`/faqs`} element={<Faqs/>}></Route>
        <Route path={`/signup`} element={<SignUp/>}></Route>
        <Route path={`/signin`} element={<SignIn/>}></Route>
        <Route path={`*`} element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  )
}

export default App