import React from 'react';
import styles from './WelcomeSection.module.css';

interface WelcomeSectionProps {
  language: 'ru' | 'en';
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ language }) => {
  const content = {
    title: {
      ru: "Добро пожаловать в Асхан!",
      en: "Welcome to Ashan!"
    },
    text: {
    ru: [
      "Окунитесь в мир бесконечных сражений в легендарной игре Heroes of Might and Magic V! ", 
      "Наше лобби возрождает культовую стратегию, добавляя современные возможности для истинных ценителей тактических битв. ",
      "Присоединяйтесь к сообществу HoMM 5 и откройте для себя игру заново!"
    ],
    en: [
      "Immerse yourself in the world of endless battles in the legendary game Heroes of Might and Magic V!",
      "Our lobby revives the cult strategy, adding modern features for true tactical battle enthusiasts.", 
      "Join the HoMM 5 community and rediscover the game!"
    ]
  }
  };

  const videoId = "ugFAOO4CXeo";

  return (
    <section className={styles.welcomeSection} id="about">
      {/* Затемнение поверх фоновой картинки */}
      <div className={styles.overlay}></div>
      
      <div className={styles.container}>
        {/* Левая часть - видео */}
        <div className={styles.videoColumn}>
          <div className={styles.videoWrapper}>
          <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0&modestbranding=1&rel=0`}
              title="Heroes V Lobby Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.youtubeVideo}
          ></iframe>
          </div>
        </div>

        {/* Правая часть - текст */}
        <div className={styles.textColumn}>
          <h2 className={styles.title}>{content.title[language]}</h2>
          <p className={styles.text}>
            {content.text[language]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;