import React from 'react';
import './navigation.scss';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="header container">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-list-item">
            <NavLink to="/" className="header__nav-list-link">
              Shop
            </NavLink>
          </li>
          <li className="header__nav-list-item">
            <NavLink to="/shopping-cart" className="header__nav-list-link">
              Shopping Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// <NavLink to="/departure" className={setClassNamesNavLink(url, '/departure')}>
//   <div className="btn__icon">
//     <i className="fa-solid fa-plane-departure"></i>
//   </div>
//   departures
// </NavLink>;

export default Navigation;
