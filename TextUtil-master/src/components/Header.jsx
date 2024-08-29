import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: props.mode === 'light'?'#e1dcdc':'black', color: props.mode === 'light'?'black':'white'}}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.mode === 'light'? 'dark' : 'light'}`} to="/">TextUtil</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active text-${props.mode === 'light'? 'dark' : 'light'}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === 'light'? 'dark' : 'light'}`} to="/about">About</Link>
            </li>
          </ul>
          <div onClick={props.red} className="form-check form-switch">
            <input className="form-check-input switch1" type="checkbox" />
          </div>

          <div onClick={props.green} className="form-check form-switch">
            <input className="form-check-input switch2" type="checkbox" />
          </div>

          <div onClick={props.blue} className="form-check form-switch">
            <input className="form-check-input switch3" type="checkbox"/>
          </div>
          <p className='mt-2'>{props.mode === 'light'?"DarkMode":"LightMode"}</p>
        </div>
      </div>
    </nav>
  )
}

export default Header; 
