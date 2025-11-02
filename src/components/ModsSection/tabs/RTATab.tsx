import React from 'react';
import styles from './RTATab.module.css';
import art from './../../../assets/images/Mods/RTATabArt.png';

interface TabProps {
  language: 'ru' | 'en';
}

export const RTATab: React.FC<TabProps> = ({ language }) => {
  const features = {
    ru: [
      "Одна решающая битва — никаких долгих матчей",
      "Только с живым оппонентом (PvP)",
      "Всё решает ваша сборка — грамотно распределите золото на прокачку, армию и артефакты",
      "Сбалансированный геймплей", 
      "Постоянные турниры"
    ],
    en: [
      "One decisive battle - no long matches",
      "Only against live opponents (PvP)", 
      "Everything depends on your build - wisely distribute gold for upgrades, army and artifacts",
      "Balanced gameplay",
      "Regular tournaments"
    ]
  };

  const description = {
    ru: "Семейство симуляторов финальных битв, в которых игроку нужно грамотно распределить золото, чтобы одолеть оппонента в одной-единственной битве.",
    en: "A family of final battle simulators where the player needs to wisely distribute gold to defeat the opponent in a single battle."
  };

  return (
    <div className={styles.rtaTab}>
      <div className={styles.modLayout}>
        {/* Левая часть - арт существа */}
        <div className={styles.artColumn}>
          <div className={styles.artContainer}>
            <img 
              src={art} 
              alt={language === 'ru' ? 'Существо RTA' : 'RTA Creature'}
              className={styles.creatureArt}
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%23daa520'%3ERTA Art%3C/text%3E%3C/svg%3E";
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
            ? 'Присоединяйтесь к напряженным PvP-битвам, где всё решает одна схватка! Уже проведено ' 
            : 'Join intense PvP battles where everything depends on one clash! Over '}
          <span className={styles.highlight}>10,000</span>
          {language === 'ru' ? ' решающих битв!' : ' decisive battles already fought!'}
        </p>
        <button className={styles.downloadButton}>
          {language === 'ru' ? 'СКАЧАТЬ' : 'DOWNLOAD'}
        </button>
      </div>
    </div>
  );
};