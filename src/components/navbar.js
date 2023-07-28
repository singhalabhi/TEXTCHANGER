import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function navbar(props) {

const [btntxt,setbtnText]=useState('Enable Drak Mode')

const [Mystyle,setmyStyle]=useState({
  color: 'black'
})


const toggleMode=()=>{

  if(props.mode=='light')
  {
     
    props.changeMode()
     setmyStyle({color: 'white'})
    setbtnText('Enable Light Mode')

  }
  else
  {
    props.changeMode()
    setmyStyle({color: 'black'})
    setbtnText('Enable Dark Mode')
  }

}


  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Textchanger</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="./about">about</Link>
        </li>
       
       
      </ul>
      
    </div>
    <div class="form-check form-switch">
        <label class="form-check-label" style={Mystyle} htmlFor="flexSwitchCheckDefault">{btntxt}</label>
        <input class="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  
     </div>
  </div>
</nav>
    </div>
  )
}
