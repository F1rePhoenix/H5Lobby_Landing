import React from 'react';
import styles from './TeamSection.module.css';
import madiar from '../../assets/images/Team/Madiar.png';
import tgame from '../../assets/images/Team/Vadim.png';
import lollyasha from '../../assets/images/Team/Lolikefir.png';
import fline from '../../assets/images/Team/fline.png';
import pegn0ly from '../../assets/images/Team/pegn0ly.jpg';

interface TeamSectionProps {
  language: 'ru' | 'en';
}

interface TeamMember {
  name: string;
  role: {
    ru: string;
    en: string;
  };
  image: any;
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
      name: "Madiar",
      role: {
        ru: "Главный разработчик и архитектор",
        en: "Lead Developer and Architect"
      },
      image: madiar
    },
    {
      name: "TGame", 
      role: {
        ru: "Комьюнити-менеджер",
        en: "Community Manager"
      },
      image: tgame
    },
    {
      name: "Lollyasha",
      role: {
        ru: "Дизайнер и UI разработчик",
        en: "Designer and UI Developer"
      },
      image: lollyasha
    },
    {
      name: "Fline",
      role: {
        ru: "DevOps-инженер",
        en: "DevOps Engineer"
      },
      image: fline
    },
    {
      name: "Pegn0ly",
      role: {
        ru: "Разработчик лобби и Lua-скриптов",
        en: "Lobby and Lua Scripts Developer"
      },
      image: pegn0ly
    }
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.backgroundWrapper}>
        <div className={styles.backgroundImage}></div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>{content.title[language]}</h2>
          
          <div className={styles.teamRow}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.memberItem}>
                <div className={styles.imageFrame}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={styles.memberImage}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;