import React from 'react';
import styles from './CardGrid.module.css';

const cards = [
  {
    title: 'Fast Performance',
    desc: 'Optimized for speed and smooth user experience.',
  },
  {
    title: 'Modular Components',
    desc: 'Reusable React components for faster development.',
  },
  {
    title: 'Responsive Design',
    desc: 'Looks great on all devices and screen sizes.',
  },
  {
    title: 'Easy to Customize',
    desc: 'Flexible styling with CSS Modules.',
  },
];

export default function CardGrid() {
  return (
    <section id="features" className={styles.gridSection}>
      <h2>Features</h2>
      <div className={styles.grid}>
        {cards.map((card, idx) => (
          <div className={styles.card} key={idx}>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
