import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import './Header.css'
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-bg  ">
            <div className="container-fluid">

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">





                    <div className="navbar-nav ms-5 ps-5">
                        <NavLink to="/home" className="nav-item nav-link active " style={{ color: "white", fontSize: "20px" }}>HOME</NavLink>
                        <NavLink to="/about" className="nav-item nav-link active " style={{ color: "white", fontSize: "20px" }}>ABOUT ME</NavLink>
                        <NavHashLink style={{ color: "white", fontSize: "20px" }} className=" nav-item nav-link active " as={HashLink} to="/home#skills">SKILLS</NavHashLink>

                        <NavHashLink style={{ color: "white", fontSize: "20px" }} className=" nav-item nav-link active " as={HashLink} to="/home#form">CONTACT</NavHashLink>





                    </div>
                    <div className="navbar-nav ms-auto">
                        <a href="https://drive.google.com/file/d/1BbL7lwEmrzxUtw78SNf-y_uve9ReoZH_/view?usp=sharing" target="_blank"><button style={{ color: "white" }} className="btn-grad">
                            <i class="fas fa-download"></i>Get Resume</button></a>

                    </div>











                </div>
            </div>
        </nav>

    );
};

export default Header;