import Navbar from './components/navbar';
import Texteditor from './components/texteditor';
import './App.css';
import React from 'react';
import { useState } from 'react';
import About from './components/about';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {


  const [Mymode, setMymode] = useState('light')

  const ChangeMode = () => {

    if (Mymode == 'light') {
      setMymode('dark')
      document.body.style.backgroundColor = '#120c2e'

    }
    else {

      setMymode('light')
      document.body.style.backgroundColor = 'white'

    }

  }

  return (
    <>

      <Router>

        <Navbar mode={Mymode} changeMode={ChangeMode}></Navbar>
        <div className="container">
          <Routes>
            <Route path="/" element={<Texteditor mode={Mymode} />}>

            </Route>
            <Route path="/about" element={<About mode={Mymode}/>}>

            </Route>

          </Routes>
        </div>


      </Router>
    </>
  );
}

export default App;
