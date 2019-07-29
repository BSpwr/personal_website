import * as React from 'react';

const Header: React.FC = () => (
  <header>
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <i
          className='fas fa-light fa-microchip fa-2x'
          style={{ color: '#ffffff' }}
        />
        <a
          className='navbar-brand'
          href='resume'
          style={{ paddingLeft: '1.2rem' }}
        >
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

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='./'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='resume'>
                Resume
              </a>
            </li>
            <li className='nav-item active'>
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
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
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

export default Header;
