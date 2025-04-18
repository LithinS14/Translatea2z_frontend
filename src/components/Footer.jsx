"use client"
// Remove the logo import
// import logo from "../assets/logo.svg"
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            {/* Replace logo with text-based logo */}
            <span className="footer-logo-icon">T</span>
            <span>Translatea2z</span>
          </div>
          <p className="footer-tagline">Upload video of any language and get subtitles automatically.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Built with Nextbase Boilerplate</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
