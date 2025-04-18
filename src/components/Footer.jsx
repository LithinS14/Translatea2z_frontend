"use client"
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="footer-logo-icon">T</span>
                <span>Translatea2z</span>
              </div>
              <p className="footer-tagline">Upload video of any language and get subtitles automatically.</p>

              <div className="footer-social">
                <a href="#" aria-label="Twitter">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 4.01C21 4.5 20.02 4.69 19 5C18.39 4.41 17.59 4.04 16.71 3.97C15.83 3.9 14.95 4.15 14.22 4.66C13.49 5.17 12.95 5.93 12.68 6.8C12.4 7.67 12.41 8.62 12.71 9.48C11.03 9.39 9.39 8.96 7.89 8.2C6.4 7.45 5.09 6.39 4.05 5.09C3.5 6.02 3.4 7.14 3.78 8.16C4.16 9.17 4.98 9.98 6.04 10.4C5.26 10.38 4.5 10.17 3.81 9.8V9.85C3.81 10.85 4.15 11.82 4.77 12.59C5.4 13.37 6.27 13.89 7.25 14.09C6.53 14.28 5.77 14.3 5.04 14.14C5.31 15.01 5.84 15.77 6.55 16.33C7.26 16.88 8.11 17.19 9 17.22C7.47 18.4 5.58 19.06 3.63 19.05C3.3 19.05 2.97 19.03 2.64 18.99C4.62 20.24 6.95 20.92 9.33 20.92C16.73 20.92 20.73 14.99 20.73 9.86C20.73 9.66 20.73 9.46 20.72 9.26C21.72 8.52 22.58 7.6 23.25 6.55C22.35 6.95 21.38 7.2 20.4 7.31C21.43 6.7 22.19 5.74 22.55 4.61L22 4.01Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a href="#" aria-label="GitHub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-links-container">
              <div className="footer-links-column">
                <h4>Product</h4>
                <ul>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="#integrations">Integrations</a>
                  </li>
                  <li>
                    <a href="#faq">FAQ</a>
                  </li>
                </ul>
              </div>

              <div className="footer-links-column">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="footer-links-column">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Cookie Policy</a>
                  </li>
                  <li>
                    <a href="#">GDPR</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Translatea2z. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
