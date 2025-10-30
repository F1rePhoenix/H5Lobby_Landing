import React from 'react';
import styles from '../ModsSection.module.css';

interface TabProps {
  language: 'ru' | 'en';
}

export const OtherModsTab: React.FC<TabProps> = ({ language }) => {
  return (
    <div className={styles.tabPanel}>
      <h3 className={styles.tabTitle}>
        {language === 'ru' ? 'Другие моды' : 'Other Mods'}
      </h3>
      <div className={styles.modContent}>
        <p>{language === 'ru' 
          ? 'Контент для других модов...' 
          : 'Content for other mods...'}</p>
      </div>
    </div>
  );
};