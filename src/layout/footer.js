import React from "react";

function footerComponent() {
  return (
    <footer className="footer">
      <div className="container">
        <img src="/logo/logo-sm.svg" alt="small logo" />

        <ul>
          <li className="title">Company</li>

          <li>
            <a href="#" title="About">
              About
            </a>
          </li>

          <li>
            <a href="#" title="FAQs">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" title="Sign up">
              Sign Up
            </a>
          </li>
        </ul>

        <ul>
          <li className="title">Legal</li>

          <li>
            <a href="#" title="Terms of Use">
              Terms of Use
            </a>
          </li>

          <li>
            <a href="#" title="Privacy Policy">
              Privacy Policy
            </a>
          </li>
        </ul>

        <ul>
          <li className="title">Contact</li>

          <li>
            <a href="mailto:contact@anteelo.com" title="Contact by email">
              Contact: contact@anteelo.com
            </a>
          </li>

          <li>
            <a
              href="mailto:support@anteelo.com"
              title="Email: support@anteelo.com"
            >
              Email: support@anteelo.com
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Join Our Facebook Group: Anteelodesign"
            >
              Join Our Facebook Group: Anteelodesign
            </a>
          </li>
        </ul>

        <ul>
          <li className="title">Follow us:</li>

          <li>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://facebook.com"
                >
                  <img src="/social/facebook.png" alt="facebook icon" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://instagram.com"
                >
                  <img src="/social/instagram.png" alt="instagram icon" />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com"
                >
                  <img src="/social/twitter.png" alt="twitter icon" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="copyright">© 2018 Invento Lots</div>
    </footer>
  );
}

export default footerComponent;
