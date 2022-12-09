import React from 'react';
import { Link } from 'react-router-dom'

import img_students from './img/img_students.png';
import logo from '../static/img/fdm_logo.png';

function MainPage() {
    return (
        <div className="container-fluid main-body">
            <div className="row align-items-center">
                <div className="col-lg-6 text-center text-lg-end">
                    <h1 className="text-center text-lg-end display-1 text-light">FDM on Track</h1>
                    <h2 className="text-center text-lg-end display-3 text-light my-4">Keep your tasks under control with the new TO-DO App</h2>
                    <Link className="btn btn-outline-light btn-lg" aria-current="page" to="/tasks">Add Tasks</Link>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid" src={img_students} alt="FDM Students" />
                </div>
                <div className="col-sm-12 footer text-center d-flex align-items-center">
                    <img className='logo-lg mx-auto' src={logo} alt="Logo" />
                </div>
            </div>
        </div>
    )
}

export default MainPage