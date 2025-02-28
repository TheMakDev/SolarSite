import React, { useEffect, useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.jpg';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const nav = document.querySelector('nav');
    setNavbarHeight(nav.offsetHeight);

    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  const closeMenu = () => setMobileMenu(false);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul id="mobile-menu" className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-250} duration={500} onClick={closeMenu}>
          Solar Solutions 
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={600} onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500} onClick={closeMenu}>
          Our Impact
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500} onClick={closeMenu}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img
        src={menu}
        alt="Toggle menu"
        className="menu-icon"
        onClick={toggleMenu}
        aria-expanded={mobileMenu}
        aria-controls="mobile-menu"
      />
    </nav>
  );
};

export default Navbar;
