
import './HelpCenter.css';
import logo from "./assets/logo.png";
import arrow from "./assets/arrow.svg";
import Axios from "axios";
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getData = async () => {
    const response = await Axios.get("http://localhost:5000/cards");
    const filteredData = response.data.filter(card =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setData(filteredData);
  };

  useEffect(() => {
    getData();
  }, [searchQuery]);

  return (
    <div className="App">
      <div className="help-center">
        <header className="header">
          <img style={{ filter: "invert(100%)", marginRight: "1%", marginLeft: "5%" }} src={logo} alt="" />
          Abstract | Help Center
          <button className="submit-request-button">Submit a request</button>
        </header>

        <section className="main-content">
          <h1>How can we help?</h1>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button className="search-button" onClick={getData}>
              <img src={arrow} alt="" />
            </button>
          </div>
        </section>

        <div className="cards">
          {data.length > 0 ? (
            data.map((card, index) => (
              <div key={index} className="card">
                <h2>{card.title}</h2>
                <hr />
                <p>{card.description}</p>
              </div>
            ))
          ) : (
            <p>Loading cards...</p>
          )}
        </div>

     <footer className="footer">
         <div className="footer-section">
           <h3>Abstract</h3>
           <p>Branches</p>
         </div>
         <div className="footer-section">
           <h3>Resources</h3>
           <p>Blog</p>
           <p>Help Center</p>
           <p>Release Notes</p>
           <p>Status</p>
         </div>
         <div className="footer-section">
           <h3>Community</h3>
           <p>Twitter</p>
           <p>LinkedIn</p>
           <p>Facebook</p>
           <p>Dribbble</p>
           <p>Podcast</p>
         </div>
         <div className="footer-section">
           <h3>Company</h3>
           <p>About Us</p>
           <p>Careers</p>
           <p>Legal</p>
           <p>Contact Us</p>
         </div>
         <div className="footer-section">
           <p>‎</p>
           <p>‎</p>
           <p>‎</p>
           <p>‎</p>
           <img  style={{filter: "invert(100%)"}} src={logo} alt="" />
           <p>&copy; Copyright 2022</p>
           <p>Abstract Studio Design,Inc.</p>
           <p>All rights reserved</p>
          
         </div>
        
       </footer>
      </div>
    </div>
  );
}

export default App;
