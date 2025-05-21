import React, { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>ReactApp</div>
      <ul className={`${styles.navLinks} ${open ? styles.open : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className={styles.burger} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
