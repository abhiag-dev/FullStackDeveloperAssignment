
import './HelpCenter.css';
import logo from "./assets/logo.png";
function App() {
  return (
    <div className="App">
      <div className="help-center">
      <header className="header">
      
        <img  style={{filter: "invert(100%)",marginRight:"1%",marginLeft:"5%"}} src={logo} alt="" />
        Abstract | Help Center
     
          
        <button className="submit-request-button">Submit a request</button>
      </header>

      <section className="main-content">
        <h1>How can we help?</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-button">→</button>
        </div>

        
      </section>
      <div className="cards">
          <div className="card">
            <h2>Branches</h2>
            <p>Abstract Branches lets you manage, version, and document your designs in one place.</p>
          </div>
          <div className="card">
            <h2>Manage your account</h2>
            <p>Configure your account settings, such as your email, profile details, and password.</p>
          </div>
          <div className="card">
            <h2>Manage organizations, teams, and projects</h2>
            <p>Use Abstract organizations, teams, and projects to organize your people and your work.</p>
          </div>
          <div className="card">
            <h2>Manage billing</h2>
            <p>Change subscriptions and payment details.</p>
          </div>
          <div className="card">
            <h2>Authenticate to Abstract</h2>
            <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
          </div>
          <div className="card">
            <h2>Abstract support</h2>
            <p>Get in touch with a human.</p>
          </div>
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
