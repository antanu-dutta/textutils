import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  // const handleColor = (e) => {
  //   console.log(e.target.style.backgroundColor);
  // }

  const { handleColorBackground } = props

  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode === "dark" ? "dark" : "light"} bg-${props.mode === "light" ? "light" : "dark"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" >About</Link>
            </li>
          </ul>
        </div>
        <div className='d-flex text-white mx-4' style={{ width: "300px", height: "50px" }} onClick={handleColorBackground}>
          <div className='w-25' style={{ backgroundColor: "#092635", cursor: "pointer", }}></div>
          <div className='w-25' style={{ backgroundColor: "#3E3232", cursor: "pointer", }}></div>
          <div className='w-25' style={{ backgroundColor: "#232D3F", cursor: "pointer", }}></div>
          <div className='w-25' style={{ backgroundColor: "#35374B", cursor: "pointer", }}></div>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.handleOnChange} />
          <label className={`form-check-label ${props.mode === "dark" ? "text-white" : "text-black"}`} htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
        </div>
      </div>
    </nav>
  )
}

