import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/Logo.png'

interface HeaderProps {
  language: 'ru' | 'en';
  onLanguageChange?: (lang: 'ru' | 'en') => void;
}

interface NavItem {
  id: string;
  label: {
    ru: string;
    en: string;
  };
  href: string;
  external?: boolean;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { 
      id: 'features', 
      label: { ru: 'Подробнее о лобби', en: 'About Lobby' },
      href: '#features'
    },
    { 
      id: 'skills', 
      label: { ru: 'Колесо умений', en: 'Skills Wheel' },
      href: 'https://h5lobby.com/wheel',
      external: true
    },
    { 
      id: 'calculator', 
      label: { ru: 'Калькулятор', en: 'Calculator' },
      href: 'https://f1rephoenix.github.io/HoMM5_calculator/',
      external: true
    },
    { 
      id: 'templates', 
      label: { ru: 'Генератор шаблонов', en: 'Template Generator' },
      href: 'https://f1rephoenix.github.io/H5Lobby-TemplateEditor/',
      external: true
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (item: NavItem) => {
    setIsMobileMenuOpen(false);
    
    // Для внутренних ссылок - плавная прокрутка
    if (!item.external) {
      const element = document.getElementById(item.href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={styles.header}>
      {/* Логотип */}
      <div className={styles.logo}>
        <a href="#top" className={styles.logoLink}>
          <img 
            src={logo}
            alt="H5Lobby" 
            className={styles.logoImage}
          />
        </a>
      </div>
      
      {/* Навигация для десктопа */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.navItem}>
              <a 
                href={item.href}
                className={styles.navLink}
                onClick={(e) => {
                  if (!item.external) {
                    e.preventDefault();
                    handleNavClick(item);
                  }
                }}
                {...(item.external ? { 
                  target: '_blank', 
                  rel: 'noopener noreferrer' 
                } : {})}
              >
                {item.label[language]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Правая часть с контролами */}
      <div className={styles.controls}>
        {/* Переключатель языка */}
        <select 
          value={language} 
          onChange={(e) => onLanguageChange?.(e.target.value as 'ru' | 'en')}
          className={styles.languageSelector}
        >
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>

        {/* Бургер-меню для мобильных */}
        <button 
          className={styles.burgerMenu}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
      </div>

      {/* Мобильное меню */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.id} className={styles.mobileNavItem}>
                <a 
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={(e) => {
                    if (!item.external) {
                      e.preventDefault();
                    }
                    handleNavClick(item);
                  }}
                >
                  {item.label[language]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;