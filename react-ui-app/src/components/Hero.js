import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1>Build Stunning React Apps</h1>
        <p>Create beautiful, responsive, and fast web apps with React and modern CSS.</p>
        <button className={styles.cta}>Get Started</button>
      </div>
    </section>
  );
}
