import React, { useState } from 'react';
import styles from './ModsSection.module.css';
import { UniverseTab } from './tabs/UniverseTab';
import { RTATab } from './tabs/RTATab';
import { Heroes55Tab } from './tabs/Heroes55Tab';
import { OtherModsTab } from './tabs/OtherModsTab';

interface ModsSectionProps {
  language: 'ru' | 'en';
}

type ModTab = 'universe' | 'rta' | 'heroes55' | 'other';

const ModsSection: React.FC<ModsSectionProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<ModTab>('universe');

  const tabs = [
    { id: 'universe' as ModTab, label: { ru: 'Universe', en: 'Universe' } },
    { id: 'rta' as ModTab, label: { ru: 'RTA', en: 'RTA' } },
    { id: 'heroes55' as ModTab, label: { ru: 'Heroes 5.5', en: 'Heroes 5.5' } },
    { id: 'other' as ModTab, label: { ru: 'Другие моды', en: 'Other Mods' } }
  ];

  // Фоны для каждого мода
  const getBackgroundStyle = () => {
    const backgrounds = {
      universe: 'url(/src/assets/images/Mods/universe-bg.png)',
      rta: 'url(/assets/images/mods/rta-bg.jpg)',
      heroes55: 'url(/assets/images/mods/heroes55-bg.jpg)',
      other: 'url(/assets/images/mods/other-bg.jpg)'
    };
    
    return {
      backgroundImage: backgrounds[activeTab],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'universe':
        return <UniverseTab language={language} />;
      case 'rta':
        return <RTATab language={language} />;
      case 'heroes55':
        return <Heroes55Tab language={language} />;
      case 'other':
        return <OtherModsTab language={language} />;
      default:
        return <UniverseTab language={language} />;
    }
  };

  return (
    <section 
      className={styles.modsSection} 
      id="mods"
      style={getBackgroundStyle()}
    >
      <div className={styles.overlay}></div>
      
      <div className={styles.container}>
        <h2 className={styles.title}>
          {language === 'ru' ? 'Все моды в одном месте' : 'All Mods in One Place'}
        </h2>
        
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label[language]}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.tabContent}>
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default ModsSection;