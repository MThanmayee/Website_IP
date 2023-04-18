import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Navbar = () => {
  return (
    <>
   
  <nav className="navbar main-nav navbar-expand-lg px-2 px-sm-0 py-2 py-lg-0">
  <div className="container">
    <a class="navbar-brand" href="Home.js">
    <Link to="/"><img src="images/our_logo.png" alt="footer-logo" width="120" height="80"/></Link>
      </a>
    <Link className="navbar-brand" to="Home"></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="ti-menu"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
      <li className="nav-item @@about">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown active">
          <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Use Cases
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/DeepTech">Deep Tech Product Development</Link></li>
            <li><Link className="dropdown-item" to="/DataPrivacy">Enabling Data Privacy in Machine Learning Model</Link></li>
            <li><Link className="dropdown-item active3" to="/LangTrans">Better Language Transcription and Translation Services</Link></li>
            </ul>
        </li>
        <li className="nav-item dropdown @@pages">
          <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Industries
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item @@team" to="/Healthcare">Healthcare</Link></li>
            <li><Link className="dropdown-item @@career" to="/Retail">Retail</Link></li>
            <li><Link className="dropdown-item @@blog" to="/Agriculture">Agriculture</Link></li>
            <li><Link className="dropdown-item @@blogSingle" to="/ConvAI">Conversational AI</Link></li>
            <li><Link className="dropdown-item @@privacy" to="/SecAI">Security and Privacy in AI</Link></li>
            </ul>
        </li>
        <li className="nav-item @@about">
          <AnchorLink className="nav-link" href="#Customers">Customers</AnchorLink>
        </li>
		<li className="nav-item dropdown @@pages">
			<Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Research
			</Link>
			<ul className="dropdown-menu">
			  <li><Link className="dropdown-item @@team" to="/Publication">Publications</Link></li>
			  <li><Link className="dropdown-item @@career" to="/Team">Research Team</Link></li>
			</ul>
		  </li>
		  <li className="nav-item dropdown @@pages">
			<Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Company
			</Link>
			<ul className="dropdown-menu">
			  <li><Link className="dropdown-item @@team" to="/AboutUs">About Us</Link></li>
			  <li><Link className="dropdown-item @@career" to="/ContactUs">Contact Us</Link></li>
			  <li><Link className="dropdown-item @@blog" to="/Careers">Careers</Link></li>
			</ul>
		  </li>
        <li className="nav-item @@contact">
          <Link className="nav-link" to="/MBlog">Blog</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </> 
  )
}

export default Navbar