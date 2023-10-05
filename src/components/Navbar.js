import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  let navigate=useNavigate();
  const Handlelogout=()=>{
    localStorage.removeItem('token');
    navigate('/login')
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">InoteBook</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
       
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex" role="search">
      <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-2" to="/signup"  role="button">Signup</Link>
        
      </form>:<button className='btn btn-primary' onClick={Handlelogout}>Logout</button>}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar