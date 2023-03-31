import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import DeepTech from './components/DeepTech';
import Footer from './components/Footer';
import DataPrivacy from './components/DataPrivacy';
import LangTrans from './components/LangTrans';
import Career from './components/Career';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Particles from './components/Particles';
import Blog from './components/Blog';
import Team from './components/Team';
import Publication from './components/Publications';
import {
BrowserRouter as Router,
Routes,
Route,
Link
} from "react-router-dom";
import Healthcare from './components/Healthcare';
import Agriculture from './components/Agriculture';
import Retail from './components/Retail';
import ConvAI from './components/ConvAI';
import SecAI from './components/SecAI';
import Customers from './components/Customers';

const App = () => {
  return (
    <Router>
      <Navbar/>
 
      <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/DeepTech" element={ <DeepTech />} />
      <Route path="/DataPrivacy" element={ <DataPrivacy />} />
      <Route path="/LangTrans" element={ <LangTrans />} />
      <Route path="/Careers" element={ <Career />} />
      <Route path="/AboutUs" element={ <AboutUs />} />
      <Route path="/ContactUs" element={<Contact/>}/>
      <Route path="/MBlog" element={<Blog/>}/>
      <Route path="/Team" element={<Team/>}/>
      <Route path="/Publication" element={<Publication/>}/>
      <Route path="/Healthcare" element={<Healthcare/>}/>
      <Route path="/Agriculture" element={<Agriculture/>}/>
      <Route path="/Retail" element={<Retail/>}/>
      <Route path="/ConvAI" element={<ConvAI/>}/>
      <Route path="/SecAI" element={<SecAI/>}/>
      <Route path="/Customers" element={<Customers/>}/>
      <Route path="/Home" element={<Home/>}/>

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App