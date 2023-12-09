import React from 'react'
import loinim from './loginimage.jpg'
import {Link,} from 'react-router-dom' 
export default function Navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
<div>
<img src={loinim} className="img-fluid" alt="login" style={{width:"100%",}}/>
</div>
    </div>
  )
}
