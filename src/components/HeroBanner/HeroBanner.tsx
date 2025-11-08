import React, {} from 'react';
import styles from './HeroBanner.module.css';

// Импортируем логотип
import lobbyLogoBanner from '../../assets/images/LogoForBanner.png';
import heroBanner from '../../assets/videos/hero-banner1280.mp4'

interface HeroBannerProps {
  language: 'ru' | 'en';
}

const HeroBanner: React.FC<HeroBannerProps> = ({ language }) => {
  const content = {
    subtitle: {
      ru: "Присоединяйся к бесконечным сражениям в мире Асхана!",
      en: "Join endless battles in the world of Ashan!"
    },
    button: {
      ru: "СКАЧАТЬ",
      en: "DOWNLOAD"
    }
  };


  return (
    <section className={styles.heroBanner} id="top">
      {/* Видео фон */}
      <div className={styles.videoContainer}>
        <video
          className={styles.videoBackground}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroBanner} type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
      </div>

      {/* Контент */}
      <div className={styles.content}>
        <div className={styles.textContainer}>
          {/* Заменяем текстовый заголовок на логотип */}
          <div className={styles.logoContainer}>
            <img 
              src={lobbyLogoBanner} 
              alt="Heroes V Lobby" 
              className={styles.bannerLogo}
            />
          </div>
          
          <p className={styles.subtitle}>{content.subtitle[language]}</p>
          <button className={styles.downloadButton}>
            {content.button[language]}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;