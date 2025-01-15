'use client';

import React from "react";
import styles from "../styles/Page5.module.css";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const FifthPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      <div className={styles.pageFive}>
        <div className={styles.pageFiveContent}>
          {/* Company Section */}
          <div className={styles.contentSection}>
            <h2 className={styles.sectionTitle}>{t.company}</h2>
            <div className={styles.sectionContent}>
              <a href="mailto:support@maxius.io" className={styles.emailLink}>
                support@maxius.io
              </a>
            </div>
          </div>

          {/* Warranty Section */}
          <div className={styles.contentSection}>
            <h2 className={styles.sectionTitle}>{t.warranty}</h2>
            <div className={styles.sectionContent}>
              <a href="#" className={styles.learnMore}>
                Learn more &gt;
              </a>
            </div>
          </div>

          {/* Technical Support Section */}
          <div className={styles.contentSection}>
            <h2 className={styles.sectionTitle}>{t.technicalSupport}</h2>
            <div className={styles.sectionContent}>
              <a href="mailto:support@maxius.io" className={styles.emailLink}>
                support@maxius.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthPage;
