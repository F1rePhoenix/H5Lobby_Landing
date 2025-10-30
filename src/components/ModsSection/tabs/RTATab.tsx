import React from 'react';
import styles from '../ModsSection.module.css';

interface TabProps {
  language: 'ru' | 'en';
}

export const RTATab: React.FC<TabProps> = ({ language }) => {
  return (
    <div className={styles.tabPanel}>
      <h3 className={styles.tabTitle}>RTA</h3>
      <div className={styles.modContent}>
        <p>{language === 'ru' 
          ? 'Контент для RTA мода...' 
          : 'Content for RTA mod...'}</p>
      </div>
    </div>
  );
};