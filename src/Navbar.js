import React from 'react'
import './Navbar.css';
import logo from "../src/myimage.jpg"
import { HashLink as Link } from "react-router-hash-link";
import Exprience from './Exprience';
import Tabed from './Tabed';
import Testimonial from './Testimonial';
import Myblog from './Myblog';
import Hero from './Hero';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid header-wraper">
                    <div className='logo-wrapper'>
                        <img className='rounded-circle' src={logo} width={70} height={70} alt="logo"></img>
                        <a className="navbar-brand fw-bold" href="#">INBIO</a>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link smooth className="nav-link active fw-medium" to={"/#home"}>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth className="nav-link  fw-medium" to={"/#about"}>ABOUT US</Link>
                            </li>

                            <li className="nav-item">
                                <Link smooth className="nav-link fw-medium" to={"/#expone"}>SERVICES</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link fw-medium" to="/#portfolio">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-medium" to="/#testi">TESTIMONIAL</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-medium" to="/#myblog">BLOG</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link buynow-btn fw-medium" aria-disabled="true">BUY NOW</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <Hero />
            <Exprience />
            <Exprience myEducation={true} />
            <Tabed />
            <Testimonial />
            <Myblog />
        </>
    )
}
