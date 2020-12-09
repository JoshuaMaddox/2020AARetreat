import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className='main-header'>
    <div className="nav-and-logo-wrapper">
      <div className="logo-wrapper">
        <Link to="/" style={{ textDecoration: `none`}}>
          <div className="inner-logo-container">
              <svg width="50px" height="69px" viewBox="0 0 28 38" version="1.1">
                  <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Header/Blue/Explore" transform="translate(-120.000000, -12.000000)">
                          <g id="Header-A/Blue-1" transform="translate(120.000000, 12.500000)">
                              <g className="outerA">
                                  <polygon id="Back-A" points="13.6852872 6.25703757 8.8484814 6.25703757 8.8484814 1.2861023e-14 16.0701446 1.64313008e-14 19.1884287 10.9698828 16.3559113 19.5110133 21.6852023 19.5110133 23.4269663 25.6060596 14.3235599 25.6060596 12.6519325 30.6291195 16.4594236 30.6291195 16.4594236 37 0.426966292 37 0.426966292 30.6291195 4.61636911 30.6291195" className="darkA"></polygon>
                                  <polygon id="Front-A" points="17.6852872 6.25703757 12.8484814 6.25703757 12.8484814 1.2861023e-14 20.0701446 1.64313008e-14 23.1884287 10.9698828 20.3559113 19.5110133 25.6852023 19.5110133 27.4269663 25.6060596 18.3235599 25.6060596 16.6519325 30.6291195 20.4594236 30.6291195 20.4594236 37 4.42696629 37 4.42696629 30.6291195 8.61636911 30.6291195" className="lightA">
                                  </polygon>
                              </g>
                          </g>
                      </g>
                  </g>
              </svg>
          </div>
        </Link>
      </div>
      <nav className="nav-wrapper">
        <ul>
          <Link to='/calendars'>
            <li>Calendars</li>
          </Link>
          <Link to='/videos'>
            <li>Why Here</li>
          </Link>
          <Link to='/letter'>
            <li>A Letter</li>
          </Link>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
