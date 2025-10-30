import React from 'react';
import styles from '../ModsSection.module.css';

interface TabProps {
  language: 'ru' | 'en';
}

// Named export вместо default
export const UniverseTab: React.FC<TabProps> = ({ language }) => {
  return (
    <div className={styles.tabPanel}>
      <h3 className={styles.tabTitle}>Universe</h3>
      <div className={styles.modContent}>
        <p>{language === 'ru' 
          ? 'Контент для Universe мода...' 
          : 'Content for Universe mod...'}</p>
      </div>
    </div>
  );
};