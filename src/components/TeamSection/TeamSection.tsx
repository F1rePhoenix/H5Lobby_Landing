import React from 'react';
import styles from './TeamSection.module.css';
import tgame from '../../assets/images/Team/Vadim.png'
import madiar from '../../assets/images/Team/Madiar.png'
import lollyasha from '../../assets/images/Team/Lolikefir.png'
import fline from '../../assets/images/Team/fline.png'

interface TeamSectionProps {
  language: 'ru' | 'en';
}

interface TeamMember {
  name: {
    ru: string;
    en: string;
  };
  role: {
    ru: string;
    en: string;
  };
  image: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ language }) => {
  const content = {
    title: {
      ru: "Властелины лобби",
      en: "Lobby Masters"
    }
  };

  const teamMembers: TeamMember[] = [
    {
      name: {
        ru: "Tgame",
        en: "Tgame"
      },
      role: {
        ru: "Разработчик",
        en: "Developer"
      },
      image: tgame
    },
    {
      name: {
        ru: "Madiar",
        en: "Madiar"
      },
      role: {
        ru: "Дизайнер", 
        en: "Designer"
      },
      image: madiar
    },
    {
      name: {
        ru: "Lollyasha",
        en: "Lollyasha"
      },
      role: {
        ru: "Тестировщик",
        en: "Tester"
      },
      image: lollyasha
    },
    {
      name: {
        ru: "fline",
        en: "fline"
      },
      role: {
        ru: "Модератор",
        en: "Moderator"
      },
      image: fline
    }
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.backgroundWrapper}>
        {/* Фоновое изображение с кха-белехом */}
        <div className={styles.backgroundImage}></div>
        
        {/* Контент поверх фона */}
        <div className={styles.content}>
          <h2 className={styles.title}>{content.title[language]}</h2>
          
          <div className={styles.teamLayout}>
            {/* Левая колонка с двумя изображениями */}
            <div className={styles.leftColumn}>
              <div className={styles.memberItem}>
                <div className={styles.imageFrame}>
                  <img 
                    src={teamMembers[0].image} 
                    alt={teamMembers[0].name[language]}
                    className={styles.memberImage}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{teamMembers[0].name[language]}</h3>
                  <p className={styles.memberRole}>{teamMembers[0].role[language]}</p>
                </div>
              </div>
              <div className={styles.memberItem}>
                <div className={styles.imageFrame}>
                  <img 
                    src={teamMembers[1].image} 
                    alt={teamMembers[1].name[language]}
                    className={styles.memberImage}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{teamMembers[1].name[language]}</h3>
                  <p className={styles.memberRole}>{teamMembers[1].role[language]}</p>
                </div>
              </div>
            </div>

            {/* Центральная колонка - пустая для фонового изображения */}
            <div className={styles.centerColumn}></div>

            {/* Правая колонка с двумя изображениями */}
            <div className={styles.rightColumn}>
              <div className={styles.memberItem}>
                <div className={styles.imageFrame}>
                  <img 
                    src={teamMembers[2].image} 
                    alt={teamMembers[2].name[language]}
                    className={styles.memberImage}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{teamMembers[2].name[language]}</h3>
                  <p className={styles.memberRole}>{teamMembers[2].role[language]}</p>
                </div>
              </div>
              <div className={styles.memberItem}>
                <div className={styles.imageFrame}>
                  <img 
                    src={teamMembers[3].image} 
                    alt={teamMembers[3].name[language]}
                    className={styles.memberImage}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{teamMembers[3].name[language]}</h3>
                  <p className={styles.memberRole}>{teamMembers[3].role[language]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;