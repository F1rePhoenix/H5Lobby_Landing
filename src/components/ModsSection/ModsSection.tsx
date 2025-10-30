import React, { useState } from 'react';
import styles from './ModsSection.module.css';

// Правильные импорты с фигурными скобками
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
  <section className={styles.modsSection} id="mods">
    {/* Убираем overlay */}
    <div className={styles.container}>
      <h2 className={styles.title}>
        {language === 'ru' ? 'Все моды в одном месте' : 'All Mods in One Place'}
      </h2>
      
      {/* Табы */}
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

      {/* Контент таба */}
      <div className={styles.tabContent}>
        {renderTabContent()}
      </div>
    </div>
  </section>
);
};

export default ModsSection;