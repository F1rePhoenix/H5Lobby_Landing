import React from 'react';
import styles from '../ModsSection.module.css';

interface TabProps {
  language: 'ru' | 'en';
}

export const Heroes55Tab: React.FC<TabProps> = ({ language }) => {
  return (
    <div className={styles.tabPanel}>
      <h3 className={styles.tabTitle}>Heroes 5.5</h3>
      <div className={styles.modContent}>
        <p>{language === 'ru' 
          ? 'Контент для Heroes 5.5 мода...' 
          : 'Content for Heroes 5.5 mod...'}</p>
      </div>
    </div>
  );
};