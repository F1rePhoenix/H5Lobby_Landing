import React from 'react';
import styles from './UniverseTab.module.css';
import art from './../../../assets/images/Mods/UniverseTabArt.png'

interface TabProps {
  language: 'ru' | 'en';
}

export const UniverseTab: React.FC<TabProps> = ({ language }) => {
  const features = {
    ru: [
      "Оптимизация игры и улучшение сетевого кода",
      "Горячие клавиши для быстрой передачи армии и артефактов",
      "Разработка уникальных инструментов для настройки ГСК и шаблонов к нему", 
      "Доработка и усовершенствование ГСК",
      "Оптимизация оригинальных игровых механик и внедрение новых",
      "Улучшения интерфейса и работа над QOL изменениями"
    ],
    en: [
      "Improved network code",
      "Hotkeys for quick army and artifact transfer",
      "Enhanced balance of the original game",
      "Custom map generator", 
      "Overhaul of old mechanics and addition of new ones"
    ]
  };

  const description = {
    ru: "Ощутите игру по-новому с модом Universe, улучшающим механики игры, при этом сохраняя основную концепцию и шарм оригинала.",
    en: "Experience the game in a new way with the Universe mod, which improves game mechanics while preserving the core concept and charm of the original."
  };


  return (
    <div className={styles.universeTab}>
      <div className={styles.modLayout}>
        {/* Левая часть - арт существа */}
        <div className={styles.artColumn}>
          <div className={styles.artContainer}>
            <img 
              src={art} 
              alt={language === 'ru' ? 'Существо Universe' : 'Universe Creature'}
              className={styles.creatureArt}
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%23daa520'%3EUniverse Art%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>

        {/* Правая часть - особенности */}
        <div className={styles.featuresColumn}>
          <p className={styles.modDescription}>
            {description[language]}
          </p>
          
          <div className={styles.featuresList}>
            <h4 className={styles.featuresTitle}>
              {language === 'ru' ? 'Ключевые особенности:' : 'Key Features:'}
            </h4>
            <ul className={styles.features}>
              {features[language].map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.downloadSection}>
        <p className={styles.downloadText}>
          {language === 'ru' 
            ? 'Присоединяйтесь к самому технологичному и популярному моду в HoMM 5 на базе которого было сыграно уже более ' 
            : 'Join the most technological and popular mod in HoMM 5 on which over '}
          <span className={styles.highlight}>70,000</span>
          {language === 'ru' ? ' рейтинговых игр!' : ' rated games have already been played!'}
        </p>
        <button className={styles.downloadButton}>
          {language === 'ru' ? 'СКАЧАТЬ' : 'DOWNLOAD'}
        </button>
      </div>
    </div>
  );
};