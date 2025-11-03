import React from 'react';
import styles from './TeamSection.module.css';
import tgame from '../../assets/images/Team/Vadim.png';
import madiar from '../../assets/images/Team/Madiar.png';
import lollyasha from '../../assets/images/Team/Lolikefir.png';
import fline from '../../assets/images/Team/fline.png';

interface TeamSectionProps {
  language: 'ru' | 'en';
}

interface TeamMember {
  name: {
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
      image: tgame
    },
    {
      name: {
        ru: "Madiar", 
        en: "Madiar"
      },
      image: madiar
    },
    {
      name: {
        ru: "Lollyasha",
        en: "Lollyasha"
      },
      image: lollyasha
    },
    {
      name: {
        ru: "fline",
        en: "fline"
      },
      image: fline
    }
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.backgroundWrapper}>
        <div className={styles.backgroundImage}></div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>{content.title[language]}</h2>
          
          <div className={styles.chessLayout}>
            {/* Первая строка - рамки по краям */}
            <div className={styles.row}>
              <div className={`${styles.memberItem} ${styles.leftPosition}`}>
                <div className={styles.imageFrame}>
                  <img 
                    src={teamMembers[0].image} 
                    alt={teamMembers[0].name[language]}
                    className={styles.memberImage}
                  />
                  <div className={styles.nameOverlay}>
                    {teamMembers[0].name[language]}
                  </div>
                </div>
              </div>
              
              <div className={`${styles.memberItem} ${styles.rightPosition}`}>
                <div className={styles.imageFrame}>
                  <img 
                    src={teamMembers[1].image} 
                    alt={teamMembers[1].name[language]}
                    className={styles.memberImage}
                  />
                  <div className={styles.nameOverlay}>
                    {teamMembers[1].name[language]}
                  </div>
                </div>
              </div>
            </div>

            {/* Вторая строка - рамки ближе к центру */}
            <div className={styles.row}>
              <div className={`${styles.memberItem} ${styles.centerLeftPosition}`}>
                <div className={styles.imageFrame}>
                  <img 
                    src={teamMembers[2].image} 
                    alt={teamMembers[2].name[language]}
                    className={styles.memberImage}
                  />
                  <div className={styles.nameOverlay}>
                    {teamMembers[2].name[language]}
                  </div>
                </div>
              </div>
              
              <div className={`${styles.memberItem} ${styles.centerRightPosition}`}>
                <div className={styles.imageFrame}>
                  <img 
                    src={teamMembers[3].image} 
                    alt={teamMembers[3].name[language]}
                    className={styles.memberImage}
                  />
                  <div className={styles.nameOverlay}>
                    {teamMembers[3].name[language]}
                  </div>
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