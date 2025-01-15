'use client';

import React from 'react';
import styles from '../styles/Menu.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '@/translations';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className={`${styles.menuOverlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.menuContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <span className={styles.closeIcon}>x</span>
        </button>

        <nav className={styles.menuNav}>
          <ul>
            <li>
              <a href="#section1" className={styles.menuItem}>Home</a>
            </li>
            <li>
              <a href="#" className={styles.menuItem}>Brochure</a>
            </li>
            <li>
              <a href="#" className={styles.menuItem}>Proposal</a>
            </li>
            <li>
              <a href="#" className={styles.menuItem}>Contact</a>
            </li>
          </ul>
        </nav>

        <div className={styles.menuFooter}>
          <div className={styles.address}>
            5F 12-30, Simin-daero 327beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do, Republic of Korea
          </div>
          <div className={styles.contact}>
            Tel 02. 851. 2662 / Fax 02. 851. 2655
          </div>
          <a href="#" className={styles.viewMap}>View Map</a>
          <div className={styles.support}>
            <div>
              <span>Company:</span>
              <a href="mailto:support@maxius.io">support@maxius.io</a>
            </div>
            <div>
              <span>Technical support:</span>
              <a href="mailto:support@maxius.io">support@maxius.io</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu; 