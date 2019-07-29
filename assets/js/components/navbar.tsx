import React from 'react';

import './navbar.scss';

export default class Navbar extends React.Component {
  path_active(path) {
    if (path == this.props.path) return 'active';
    else return '';
  }

  render() {
    return (
      <header>
        <div>
          <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <i className='fas fa-light fa-microchip fa-2x navbar-logo' />
            <a className='navbar-brand' href='resume'>
              Boris Spektor
            </a>

            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav mr-auto'>
                <li className={`nav-item ${this.path_active('/')}`}>
                  <a className='nav-link' href='./'>
                    Home <span className='sr-only'>(current)</span>
                  </a>
                </li>
                <li className={`nav-item ${this.path_active('/resume')}`}>
                  <a className='nav-link' href='resume'>
                    Resume
                  </a>
                </li>
                <li className={`nav-item ${this.path_active('/counter')}`}>
                  <a className='nav-link' href='counter'>
                    Counter
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Projects
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                    <div className='dropdown-divider' />
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
