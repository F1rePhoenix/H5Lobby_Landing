import React from 'react';
import styles from './DownloadBanner.module.css';
import backgroundImage from '../../assets/images/banner/fon.png'
import surpriseArt from '../../assets/images/banner/demonesskaRUS.png'

interface DownloadBannerProps {
  language: 'ru' | 'en';
}

const DownloadBanner: React.FC<DownloadBannerProps> = ({ language }) => {
  const content = {
    title: {
      ru: "Присоединяйся к сообществу и стань легендарным героем Асхана!",
      en: "Join the community and become a legendary hero of Ashan!"
    },
    downloadButton: {
      ru: "Скачать",
      en: "Download"
    }
  };

  const handleDownload = () => {
    console.log('Download initiated');
  };

  return (
    <section className={styles.downloadBanner}>
      <div className={styles.backgroundWrapper}>
        {/* Фоновое изображение */}
        <div 
          className={styles.backgroundImage}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        
        {/* Затемнение */}
        <div className={styles.overlay}></div>
        
        {/* Контент */}
        <div className={styles.content}>
          {/* Призывающая надпись */}
          <h2 className={styles.title}>{content.title[language]}</h2>
          
          {/* Контейнер для кнопки и арта */}
          <div className={styles.downloadContainer}>
            {/* Арт, который появляется при наведении */}
            <div className={styles.surpriseArt}>
              <img 
                src={surpriseArt} 
                alt="Surprise art"
                className={styles.artImage}
              />
            </div>
            
            {/* Кнопка скачать */}
            <button 
              className={styles.downloadButton}
              onClick={handleDownload}
            >
              {content.downloadButton[language]}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadBanner;