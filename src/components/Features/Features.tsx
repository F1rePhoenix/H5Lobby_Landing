import React from 'react';
import styles from './Features.module.css';
import ranking from '../../assets/images/features/reiting.png'
import statistics from '../../assets/images/features/statistics.png'
import template from '../../assets/images/features/templateEditor.png'
import update from '../../assets/images/features/load.png'

interface FeaturesProps {
  language: 'ru' | 'en';
}

const Features: React.FC<FeaturesProps> = ({ language }) => {
  const features = [
    {
      id: 1,
      title: {
        ru: "Встроенный сетевой модуль",
        en: "Built-in VPN"
      },
      description: {
        ru: "Стабильное соединение без задержек и головной боли. Играйте с кем угодно без скачивания сторонних приложений и танцев с бубном!",
        en: "Stable connection without delays. Play with opponents from around the world without connection issues. Our built-in VPN provides reliable protection and minimal ping."
      },
      image: "/assets/images/features/vpn.jpg",
      reverse: false
    },
    {
      id: 2,
      title: {
        ru: "Рейтинговая система", 
        en: "Rating System"
      },
      description: {
        ru: "Соревнуйтесь с лучшими игроками и поднимайтесь в рейтинговой таблице! Умная система подбора противников обеспечивает сбалансированные и интересные матчи.",
        en: "Compete with the best players and climb the leaderboard. Smart matchmaking system ensures balanced and exciting matches."
      },
      image: ranking,
      reverse: true
    },
    {
      id: 3,
      title: {
        ru: "Детальная статистика",
        en: "Detailed Statistics"
      },
      description: {
        ru: "Отслеживайте свой прогресс с подробной статистикой игр. Анализируйте победы и поражения, улучшайте тактику и становитесь лучше с каждой игрой.",
        en: "Track your progress with detailed game statistics. Analyze wins and losses, improve your tactics and get better with every game."
      },
      image: statistics, 
      reverse: false
    },
    {
      id: 4,
      title: {
        ru: "Авто-обновления",
        en: "Auto-Updates"
      },
      description: {
        ru: "Всегда актуальная версия. Больше не нужно вручную проверять обновления - система сама заботится о том, чтобы у вас была последняя версия вашего любимого мода.",
        en: "Always up-to-date lobby version. No more manual update checks - the system automatically ensures you have the latest version."
      },
      image: update,
      reverse: true
    },
    {
      id: 5,
      title: {
        ru: "Улучшенный генератор шаблонов", 
        en: "Enhanced Template Generator"
      },
      description: {
        ru: "Создавайте собственные карты для сражений с помощью расширенного генератора шаблонов. Он позволяет настроить всё до мельчайших деталей!",
        en: "Create perfect maps for battles. Advanced generation settings, custom parameters support and intuitive interface."
      },
      image: template,
      reverse: false
    }
  ];

  return (
    <section className={styles.featuresSection} id="features">
      {/* Затемнение поверх фона */}
      <div className={styles.overlay}></div>
      
      <div className={styles.container}>
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className={`${styles.featureItem} ${feature.reverse ? styles.reverse : ''}`}
          >
            {/* Изображение */}
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <img 
                  src={feature.image} 
                  alt={feature.title[language]}
                  className={styles.featureImage}
                  onError={(e) => {
                    // Заглушка если изображение не загрузилось
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%23daa520'%3E" + feature.title[language] + "%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>

            {/* Текст */}
            <div className={styles.textColumn}>
              <h3 className={styles.featureTitle}>{feature.title[language]}</h3>
              <p className={styles.featureDescription}>{feature.description[language]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;