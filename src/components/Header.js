import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg mb-2">
            <div className="container">
                <Link className="navbar-brand" to='/'>
                    <img className='logo' src="https://picsum.photos/id/58/50/50" alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="!#">Books</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="!#">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;