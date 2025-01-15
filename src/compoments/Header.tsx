'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import { useLanguage } from '../context/LanguageContext';
import Menu from './Menu';

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const [textColor, setTextColor] = useState('black');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleSectionChange = (event: CustomEvent) => {
      const sectionIndex = event.detail.sectionIndex;
      
      // Xác định màu dựa trên index của section
      switch(sectionIndex) {
        case 1:
          setTextColor('black');
          break;
        case 2:
        case 3:
        case 5:
          setTextColor('white');
          break;
        case 4:
          setTextColor('black');
          break;
        default:
          setTextColor('white');
      }
    };

    // Khởi tạo màu ban đầu cho section đầu tiên
    setTextColor('black');

    // Lắng nghe sự kiện custom
    document.addEventListener('sectionChange', handleSectionChange as EventListener);
    return () => {
      document.removeEventListener('sectionChange', handleSectionChange as EventListener);
    };
  }, []);

  return (
    <>
      <header className={`${styles.header} ${textColor === 'black' ? styles.dark : ''}`}>
        <div className={styles.logo}>
          <a href="/">MAXIUS</a>
        </div>

        <div className={styles.rightMenu}>
          <div className={styles.langSwitcher}>
            <a 
              href="#" 
              className={language === 'en' ? styles.active : ''}
              onClick={() => setLanguage('en')}
            >
              EN
            </a>
            <span className={styles.divider}>|</span>
            <a 
              href="#" 
              className={language === 'kr' ? styles.active : ''}
              onClick={() => setLanguage('kr')}
            >
              KR
            </a>
          </div>

          <button 
            className={styles.menuBtn}
            onClick={() => setIsMenuOpen(true)}
          >
            <span className={styles.menuIcon}></span>
          </button>
        </div>
      </header>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header; 