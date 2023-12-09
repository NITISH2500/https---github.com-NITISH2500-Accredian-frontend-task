import React from 'react'
import "./style.css"
import {Link}from 'react-router-dom'
export default function Login(props) {
  return (
    <div>
        
        <div style={{ minWidth: "400px",position: "absolute", textAlign: "center", top: "30%",left: "30%",border:"5px solid" }}>
  <form className="px-4 py-3" style={{borderRadius:"5px", padding:"20px",}} >
    <div className="mb-3">
      <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" onChange={props.too} />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" onChange={props.pass}/>
    </div>
    <div className="mb-3">
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
        <label className="form-check-label" htmlFor="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary" onClick={props.login}>
      Sign in</button>
      <h1 style={{color:'red'}}>{props.loginStatus}</h1>
  </form>
  <div className="dropdown-divider"></div>
  <Link className="dropdown-item" to="/signup">New around here? Sign up</Link>

</div>
    </div>
  )
}
