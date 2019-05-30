import React, { Component } from 'react';

import './HeaderAsset/header.css';

class Header extends Component {
  render() {
    return (
      <header>

        <div className = "logo">
           {/*Place holder in case we need to add stuff above nav bar*/}
        </div>

        <nav>
          <ul>
            <li>
              <a href='#'>Program Template</a>
            </li>
            <li>
              <a href='#'>Program Live Table</a>
            </li>
            <li>
              <a href='#'>Class Template</a>
            </li>
            <li>
              <a href='#'>Class Live Table</a>
            </li>
            <li>
              <a href='#'>Teacher Template</a>
            </li>

          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
