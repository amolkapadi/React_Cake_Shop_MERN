import React from 'react'
import { NavLink ,useNavigate} from "react-router-dom";

export default function Navbar() {
    const auth =localStorage.getItem('user');
    const navigate= useNavigate();
    const logout =() =>{
        localStorage.clear();
        navigate('/signup');

    }
    
    return (
        <>
            <header>

            </header>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/"><span className='logo-text'>Cake-Shop</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link "  to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cake">Cake's</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/order">Order</NavLink>
                            </li>
                           
                        
                            
                          
                           {
                                auth ? <NavLink onClick={logout} className="nav-link" to="/signup">Logout({JSON.parse(auth).name})</NavLink>
                                : <>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Signup</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                                </>
                            }
                         
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </>
    )
}
