import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Navigation.css'

const tabs = [{
  route: "/",
  icon: faHome,
  label: "Home"
},{
  route: "/bookmarked",
  icon: faBookmark,
  label: "Bookmarked"
},{
  route: "/account",
  icon: faUserCircle,
  label: "Account"
}]

const Navigation = (props) => {

  return (
    <div>
    <nav className="bottomNavigation navbar fixed-bottom navbar-light d-block bottom-tab-nav" role="navigation">
      <Nav className="w-100">
        <div className=" d-flex flex-row justify-content-around w-100">
          {
            tabs.map((tab, index) =>(
              <NavItem key={`tab-${index}`}>
                <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon}/>
                    <div className="bottom-tab-label">{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))
          }
        </div>
      </Nav>
    </nav>
    </div>
  )
};

export default Navigation;