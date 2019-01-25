import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <nav>
            <ul>
              <li>
                <a href="https://tenders.gov.au">Austender</a>
              </li>
              <li>
                <a href="https://tenders.gov.au">About Us</a>
              </li>
              <li>
                <a href="https://gruden.com">Gruden</a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            &copy; {1900 + new Date().getYear()}, Designed by{" "}
            <a
              href="https://gruden.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gruden
            </a>. Coded by{" "}
            <a
              href="https://talampas.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rodel Talampas
            </a>.
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
