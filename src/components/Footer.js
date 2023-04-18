import React from 'react'
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Footer = () => {
    return (
      <>
      <footer>
  <div class="footer-main">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-12 m-md-auto align-self-center">
          <div class="block">
          <Link to="/"><img src="images/our_logo.png" alt="footer-logo" width="120" height="80"/></Link>
          <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
            
           
            <ul class="social-icon list-inline">
              <li class="list-inline-item">
                <Link to="https://www.facebook.com/themefisher"><i class="ti-facebook"></i></Link>
              </li>
              <li class="list-inline-item">
                <Link to="https://twitter.com/themefisher"><i class="ti-twitter"></i></Link>
              </li>
              <li class="list-inline-item">
                <Link to="https://www.instagram.com/themefisher/"><i class="ti-instagram"></i></Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
          <div class="block-2">
           
            <h6>Usecases</h6>
           
            <ul>
              <li><Link to="/DeepTech">Deep Tech Product Development</Link></li>
              <li><Link to="/DataPrivacy">Enabling Data Privacy in Machine Learning Model</Link></li>
              <li><Link to="/LangTrans">Better Language Transcription and Translation Services</Link></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
          <div class="block-2">
            
            <h6>Industries</h6>
           
            <ul>
              <li><Link to="/Healthcare">Healthcare</Link></li>
              <li><Link to="/Retail">Retail</Link></li>
              <li><Link to="/Agriculture">Agriculture</Link></li>
              <li><Link to="/ConvAI">Conversational AI</Link></li>
              <li><Link to="SecAI">Security and Privacy in AI</Link></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
          <div class="block-2">
            <h6>Research</h6>
            <ul>
              <li><Link to="/Publication">Publications</Link></li>
              <li><Link to="/Team">Research Team</Link></li>
              <br/>
              <li><Link to="/MBlog"><h6>Blog</h6></Link></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
          <div class="block-2">
            <h6>Company</h6>
            <ul>
              <li><Link to="/AboutUs">About Us</Link></li>
              <li><Link to="/ContactUs">Contact Us</Link></li>
              <li><Link to="/Careers">Careers</Link></li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
       </> 
  )
}

export default Footer