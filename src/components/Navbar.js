import React from 'react'
import PropTypes from 'prop-types' 

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
    <div className="container-fluid">

      {/* Title on the NavBar */}
      <a className={`navbar-brand text-${props.mode === 'light' ? 'dark':'light'}`} href="/"> <strong>TextUtils</strong></a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

        {/* Dark mode Switch  */}
         <div className="form-check form-switch text-light">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className={`form-check-label text-${props.mode === 'light' ? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault"> <strong>Enable Dark Mode</strong></label>
        </div>

      </div>

    </div> 
    </nav>
  )
}


//Typechecking through PropTypes for avoiding any bug caused by Syntax Error.
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

// Seting default value of the props.
Navbar.defaultProps = {
    title: "Set Text here",
    aboutText: "Set aboutText here"
}