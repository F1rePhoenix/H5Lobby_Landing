import React, { useState } from 'react';
import styles from './FAQSection.module.css';
import leftArt from '../../assets/images/FAQ/furyfullhight.png'
import rightArt from '../../assets/images/FAQ/mistress.png'
interface FAQSectionProps {
  language: 'ru' | 'en';
}

interface FAQItem {
  question: {
    ru: string;
    en: string;
  };
  answer: {
    ru: string;
    en: string;
  };
}

export const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

const faqData: FAQItem[] = [
  {
    question: {
      ru: "Как присоединиться к лобби?",
      en: "How to join the lobby?"
    },
    answer: {
      ru: `<p class="${styles.answerText}">Скачайте приложение используя любую кнопку "Скачать" на данном сайте.</p>`,
      en: `<p class="${styles.answerText}">Download the application using any "Download" button on this site.</p>`
    }
  },
  {
    question: {
      ru: "Как зарегистрироваться в клиенте онлайн-лобби?",
      en: "How to register in the online lobby client?"
    },
    answer: {
      ru: `
        <p class="${styles.answerText}">✦ Введите ваш адрес электронной почты и придумайте пароль на вкладке регистрации. Нажмите кнопку отправки проверочного кода рядом с полем адреса электронной почты.</p>
        <p class="${styles.answerText}">✦ Проверьте свой почтовый ящик и узнайте из полученного письма от no-reply@h5lobby.ru ваш проверочный код, который необходимо добавить в поле проверочного кода на вкладке регистрации онлайн-лобби.</p>
        <p class="${styles.answerText}">✦ Поздравляем! Теперь вы - полноценный участник нашего лобби!</p>
      `,
      en: `
        <p class="${styles.answerText}">✦ Enter your email address and create a password on the registration tab. Click the verification code send button next to the email field.</p>
        <p class="${styles.answerText}">✦ Check your mailbox and find your verification code from the email received from no-reply@h5lobby.ru, which must be added to the verification code field on the online lobby registration tab.</p>
        <p class="${styles.answerText}">✦ Congratulations! You are now a full member of our lobby!</p>
      `
    }
  },
  {
    question: {
      ru: "Что делать если у меня возникают проблемы с установкой или регистрацией?",
      en: "What to do if I have problems with installation or registration?"
    },
    answer: {
      ru: `<p class="${styles.answerText}">Воспользуйтесь <a href="https://docs.google.com/document/d/1nqHFgk9YK0PL50ppDtbuDI5gANCwYEzEq52b3PmHVtI/edit#heading=h.uccrcikvp40o" class="${styles.link}">данной инструкцией</a>, которая содержит решение наиболее частых проблем. Если не нашли решения - обратитесь в наш <a href="https://discord.com/invite/NzN7yW6" class="${styles.link}">Discord</a>.</p>`,
      en: `<p class="${styles.answerText}">Use <a href="https://docs.google.com/document/d/1nqHFgk9YK0PL50ppDtbuDI5gANCwYEzEq52b3PmHVtI/edit#heading=h.uccrcikvp40o" class="${styles.link}">this guide</a> which contains solutions to the most common problems. If you haven't found a solution - contact our <a href="https://discord.com/invite/NzN7yW6" class="${styles.link}">Discord</a>.</p>`
    }
  },
  {
    question: {
      ru: "Как найти оппонента для сетевой игры?",
      en: "How to find an opponent for online play?"
    },
    answer: {
      ru: `<p class="${styles.answerText}">Выберите версию игры, выберите шаблон, если требуется, вставайте в очередь на поиск по кнопке "Найти оппонента". Используйте чат онлайн-лобби, для коммуникации с другими игроками.</p>`,
      en: `<p class="${styles.answerText}">Select the game version, select a template if required, join the search queue by clicking the "Find Opponent" button. Use the online lobby chat to communicate with other players.</p>`
    }
  },
  {
    question: {
      ru: "Какое дополнительное программное обеспечение требуется для игры по сети?",
      en: "What additional software is required for online play?"
    },
    answer: {
      ru: `<p class="${styles.answerText}">Специально для вас мы добавили в приложение онлайн-лобби встроенный ВПН-клиент, который автоматически запустится и создаст между вами и вашим оппонентом сетевой канал. Никаких других программ использовать больше не нужно!</p>`,
      en: `<p class="${styles.answerText}">Especially for you, we have added a built-in VPN client to the online lobby application that will automatically start and create a network channel between you and your opponent. No other programs are needed!</p>`
    }
  },
  {
    question: {
      ru: "Где можно более подробно узнать о приложении онлайн-лобби и моде Universe?",
      en: "Where can I learn more about the online lobby application and Universe mod?"
    },
    answer: {
      ru: `<p class="${styles.answerText}">Следите за новостями в группе <a href="https://vk.com/h5universe" class="${styles.link}">VK</a>, или на нашем <a href="https://discord.com/invite/NzN7yW6" class="${styles.link}">Discord-сервере</a>.</p>`,
      en: `<p class="${styles.answerText}">Follow the news in the <a href="https://vk.com/h5universe" class="${styles.link}">VK</a> group, or on our <a href="https://discord.com/invite/NzN7yW6" class="${styles.link}">Discord server</a>.</p>`
    }
  }
];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.threeColumnLayout}>
        {/* Левая колонка - арт существа */}
        <div className={styles.leftColumn}>
          <div className={styles.artContainer}>
            <img 
              src= {leftArt} 
              alt={language === 'ru' ? 'Левое существо' : 'Left creature'}
              className={styles.creatureArt}
            />
          </div>
        </div>

        {/* Центральная колонка - FAQ */}
        <div className={styles.centerColumn}>
          <h2 className={styles.sectionTitle}>
            {language === 'ru' ? 'Часто задаваемые вопросы' : 'Frequently Asked Questions'}
          </h2>
          
          <div className={styles.accordion}>
            {faqData.map((item, index) => (
              <div key={index} className={styles.accordionItem}>
                <button 
                  className={`${styles.accordionButton} ${activeIndex === index ? styles.active : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={styles.questionText}>{item.question[language]}</span>
                  <span className={styles.accordionIcon}>
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                <div 
                  className={`${styles.accordionContent} ${activeIndex === index ? styles.active : ''}`}
                >
                  <div 
                    className={styles.answerContent}
                    dangerouslySetInnerHTML={{ __html: item.answer[language] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Правая колонка - арт существа */}
        <div className={styles.rightColumn}>
          <div className={styles.artContainer}>
            <img 
              src={rightArt}
              alt={language === 'ru' ? 'Правое существо' : 'Right creature'}
              className={styles.creatureArt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;