import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
  <div className="navbar-">
    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

      
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item">Github Repos</a>
            </Link>
            <Link href="/">
              <a className="navbar-item">Home</a>
            </Link>
            <Link href="/about">
              <a className="navbar-item">About</a>
            </Link>
          </div>
        </div>
      
    </nav>

  );
};

export default Navbar;
