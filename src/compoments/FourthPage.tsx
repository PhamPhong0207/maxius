'use client';

import React from "react";
import styles from "../styles/Page4.module.css";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const FourthPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      <div className={styles.pageFour}>
        <h1 className={styles.mainTitle}>{t.story}</h1>
        <div className={styles.pageFourContent}>
          {/* History Column */}
          <div className={styles.tableColumn}>
            <div className={styles.tableItem}>
              <h2 className={styles.tableTitle}>{t.history.title}</h2>
              <div className={styles.tableDesc}>
                <div className={styles.historyItem}>
                  <span className={styles.tableNote}>2021</span>
                  <p>{t.history.year2021}</p>
                </div>
                <div className={styles.historyItem}>
                  <span className={styles.tableNote}>2020</span>
                  <p>{t.history.year2020}</p>
                  <p>{t.history.certification}</p>
                </div>
                <div className={styles.historyItem}>
                  <span className={styles.tableNote}>2019</span>
                  <p>{t.history.year2019}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Partners Column */}
          <div className={styles.tableColumn}>
            <div className={styles.tableItem}>
              <h2 className={styles.tableTitle}>{t.partners.title}</h2>
              <div className={styles.tableDesc}>
                <p className={styles.partnerHeader}>{t.partners.corporate}</p>
                <p>{t.partners.description}</p>
                <p className={styles.partnerNote}>More than 1,100 government-related companies, including them</p>
                <p className={styles.partnerHeader}>{t.partners.additional}</p>
                <p>KAIST, Seoul National University, Dongguk</p>
              </div>
            </div>
          </div>

          {/* Patents Column */}
          <div className={styles.tableColumn}>
            <div className={styles.tableItem}>
              <h2 className={styles.tableTitle}>{t.patents.title}</h2>
              <div className={styles.tableDesc}>
                <div className={styles.patentItem}>
                  <h3>{t.patents.chip}</h3>
                  <p>FPGA/CPLD/ASIC design and manufacturing technology, possess TPU development capability</p>
                </div>
                <div className={styles.patentItem}>
                  <h3>{t.patents.algorithm}</h3>
                  <p>Hybrid machine algorithm that follows data pattern analysis</p>
                </div>
                <div className={styles.patentItem}>
                  <h3>{t.patents.optimization}</h3>
                  <p>Device Driver optimization technology differing for each OS, storage resource management technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Awards Column */}
          <div className={styles.tableColumn}>
            <div className={styles.tableItem}>
              <h2 className={styles.tableTitle}>{t.awards.title}</h2>
              <div className={styles.tableDesc}>
                <div className={styles.awardItem}>
                  <h3>{t.awards.sejong}</h3>
                </div>
                <div className={styles.awardItem}>
                  <h3>{t.awards.patent}</h3>
                </div>
                <div className={styles.awardItem}>
                  <h3>{t.awards.excellent}</h3>
                  <p>Certification of the only excellent procurement registered product in Korea in the server field that has been recognized for its high-performance system quality</p>
                </div>
                <div className={styles.awardItem}>
                  <h3>{t.awards.green}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;  
