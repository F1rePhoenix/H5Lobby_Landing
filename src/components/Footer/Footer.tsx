import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  language: 'ru' | 'en';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    copyright: {
      ru: "© 2025 UniverseTeam. Все права защищены.",
      en: "© 2025 UniverseTeam. All rights reserved."
    },
    madeBy: {
      ru: "made by ",
      en: "made by "
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Социальные сети */}
        <div className={styles.socialLinks}>
          <a 
            href="https://vk.com/h5universe" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="VK"
          >
            <svg width="4em" height="4em" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2M18.15 16.27H16.69C16.14 16.27 15.97 15.82 15 14.83C14.12 14 13.74 13.88 13.53 13.88C13.24 13.88 13.15 13.96 13.15 14.38V15.69C13.15 16.04 13.04 16.26 12.11 16.26C10.57 16.26 8.86 15.32 7.66 13.59C5.85 11.05 5.36 9.13 5.36 8.75C5.36 8.54 5.43 8.34 5.85 8.34H7.32C7.69 8.34 7.83 8.5 7.97 8.9C8.69 10.96 9.89 12.76 10.38 12.76C10.57 12.76 10.65 12.66 10.65 12.25V10.03C10.6 9.42 10.07 9.26 10.07 8.79C10.07 8.62 10.2 8.44 10.44 8.44H12.73C13.04 8.44 13.15 8.63 13.15 9.06V12.02C13.15 12.3 13.28 12.39 13.46 12.39C13.72 12.39 14.04 12.18 14.55 11.71C15.64 10.68 16.47 8.77 16.47 8.77C16.57 8.55 16.71 8.34 17.08 8.34H18.45C18.8 8.34 18.91 8.68 18.8 8.97C18.36 10.18 16.76 12.04 16.2 12.58C15.83 12.94 15.7 13.08 15.7 13.28C15.7 13.48 15.94 13.72 16.2 13.97C17.2 14.93 18.45 16.27 18.85 16.77C19.03 16.99 18.98 16.27 18.15 16.27Z"/>
            </svg>
          </a>
          <a 
            href="https://discord.com/invite/NzN7yW6" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Discord"
          >
            <svg width="4em" height="4em" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
            </svg>
          </a>
        </div>

        {/* Копирайт */}
        <div className={styles.copyright}>
          {content.copyright[language]}
        </div>

        {/* Сноска */}
        <div className={styles.credits}>
          {content.madeBy[language]}
          <a 
            href="https://t.me/lmmortalPhoenix" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.creditLink}
          >
            Phoenix
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;