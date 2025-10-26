// src/components/Header/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import headerData from './headerData.json';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const { logoText, links } = headerData;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="/logo-placeholder.png" alt="Logo" className={styles.logoImage} />
          {logoText}
        </Link>
      </div>

      <nav className={styles.navLinks}>
        <ul>
          {links.map((link, index) => (
            <li key={index}><Link to={link.url}>{link.label}</Link></li>
          ))}
        </ul>
      </nav>

      <button className={styles.hamburger} onClick={() => setMenuOpen(true)}>
        <FaBars />
      </button>

      <div className={`${styles.sideMenu} ${menuOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>
        <ul>
          {links.map((link, index) => (
            <li key={index}><Link to={link.url} onClick={() => setMenuOpen(false)}>{link.label}</Link></li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;