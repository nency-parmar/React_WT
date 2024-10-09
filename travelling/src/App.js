import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Places from './Components/Places';
import Services from './Components/Services';
import PageNotFound from './Components/PagenotFound';
import BookNow from './Components/BookNow';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Header />} >
              <Route index element={<Home />} />
              <Route path="/places/booknow" element={<BookNow />}/>
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/places' element={<Places/>} />
              <Route path='/services' element={<Services/>} />
              <Route path="/*" element={<PageNotFound/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <BookNow/> */}
    </>
  );
}

export default App;