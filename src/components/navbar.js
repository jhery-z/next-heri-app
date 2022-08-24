import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link href="/">
              <a class="navbar-item">Github Repos</a>
            </Link>
            <Link href="/">
              <a class="navbar-item">Home</a>
            </Link>
            <Link href="/about">
              <a class="navbar-item">About</a>
            </Link>
          </div>
        </div>
      
    </nav>

  );
};

export default Navbar;
