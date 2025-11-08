import React from 'react';
import styles from './Heroes55Tab.module.css';
import art from './../../../assets/images/Mods/HeroesTabArt.png';

interface TabProps {
  language: 'ru' | 'en';
}

export const Heroes55Tab: React.FC<TabProps> = ({ language }) => {
  const features = {
    ru: [
      "Новые классы и система навыков",
      "HD текстуры", 
      "Обновленные кампании",
      "Расширенное поле боя",
      "Улучшенный генератор случайных карт, более 60 шаблонов и 30+ новых объектов на карте",
      "Более быстрый и умный ИИ",
      "Переведен на 7 языков"
    ],
    en: [
      "New classes and skill system",
      "HD textures",
      "Updated campaigns", 
      "Expanded battlefield",
      "Better RMG, more than 60 Templates and 30+ new adventure map objects",
      "Faster and better AI",
      "Translated in 7 languages"
    ]
  };

  const description = {
    ru: "Неофициальное расширение для Heroes V: Tribes of the East, добавляющее новых героев, классы, специализации, навыки, артефакты и заклинания приключений, сохраняя верность лору.",
    en: "Unofficial expansion for Heroes V: Tribes of the East adding new heroes, classes, specializations, skills, artifacts and adventure spells while staying true to the lore."
  };

return (
  <div className={styles.heroes55Tab}>
    <div className={styles.modLayout}>
      {/* Левая часть - арт существа */}
      <div className={styles.artColumn}>
        <div className={styles.artContainer}>
          <img 
            src={art} 
            alt={language === 'ru' ? 'Существо Heroes 5.5' : 'Heroes 5.5 Creature'}
            className={styles.creatureArt}
            onError={(e) => {
              e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%23daa520'%3EHeroes 5.5 Art%3C/text%3E%3C/svg%3E";
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
            {language === 'ru' ? 'Ключевые компоненты:' : 'Key components:'}
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

    {/* Продающий блок с кнопкой скачать */}
    <div className={styles.downloadSection}>
      <p className={styles.downloadText}>
        {language === 'ru' 
          ? 'Откройте для себя культовую игру заново с модом Heroes 5.5! Более ' 
          : 'Rediscover the cult game with Heroes 5.5 mod! Over '}
        <span className={styles.highlight}>50,000</span>
        {language === 'ru' ? ' игроков уже оценили улучшения!' : ' players have already appreciated the improvements!'}
      </p>
      <button className={styles.downloadButton}>
        {language === 'ru' ? 'СКАЧАТЬ' : 'DOWNLOAD'}
      </button>
    </div>
  </div>
);
};