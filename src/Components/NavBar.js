import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> {props.title} </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"aria-expanded="false" aria-label="Toggle navigation" ><span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/"> Home </Link></li>
            <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/about"> About Us  </Link></li>
            {/* <li className="nav-item"> <Link className="nav-link" to="/"> {props.Link}</Link> </li> */}
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >{props.Dropdown}</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li> <a className="dropdown-item" href="/"> {props.Action} </a> </li>
                <li><hr className="dropdown-divider" /></li>
                <li> <a className="dropdown-item" href="/"> {props.action1} </a> </li>
              </ul>
            </li> */}
          </ul>
          <div className={`form-check form-switch mx-2 text-${props.mode==='light'?'dark':'light' }`}>
            <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
          </div>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired//is required ensures that something must be given
    //don't work when default is given as it fulfill the condition
    // link: PropTypes.string,
    // Dropdown: PropTypes.string,
    // Action: PropTypes.string,
    // action1: PropTypes.string
}
//if props are not written in app.js
NavBar.defaultProps = {
    title: 'Write Title'
    // link: 'Link',
    // Dropdown: 'Dropdown',
    // Action: 'Action',
    // action1: 'Another Action'
}