import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="subscribe">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from metta muse.</p>
          <div className="subscribe-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact-currency">
          <div className="contact">
            <h4>CONTACT US</h4>
            <p>+44 221 133 5350</p>
            <p>customercare@mettamuse.com</p>
          </div>

          <div className="currency">
            <h4>CURRENCY</h4>
            <p>🇺🇸 USD</p>
            <small>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </small>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-links">
          <div className="column">
            <h5>mettā muse</h5>
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>

          <div className="column">
            <h5>QUICK LINKS</h5>
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        <div className="footer-social">
          {/* <h5>FOLLOW US</h5>
          <div className="social-icons">
          
          
            
          </div> */}

          <h5>metta muse ACCEPTS</h5>
          <div className="payment-icons">
            <img src="https://img.icons8.com/color/48/google-pay-india.png" alt="Google Pay" />
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
            <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" />
            <img src="https://img.icons8.com/color/48/apple-pay.png" alt="Apple Pay" />
            <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="Mastercard" />
          </div>
        </div>
      </div>

      <p className="copyright">Copyright © 2023 mettamuse. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
