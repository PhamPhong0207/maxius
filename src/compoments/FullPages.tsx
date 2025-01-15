'use client';
import React, { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";
import styles from "../styles/FullPageExample.module.css";

import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import Header from './Header';

const FullPageExample: React.FC = () => {
  useEffect(() => {
    const fullpageInstance = new fullpage("#fullpage", {
      autoScrolling: true,
      navigation: true,
      anchors: ["section1", "section2", "section3", "section4", "section5"],
      navigationPosition: "right",
      normalScrollElements: '.tableDesc',
      scrollOverflow: true,
      scrollOverflowReset: true,
      scrollingSpeed: 1000,
      fitToSection: true,
      touchSensitivity: 15,
      continuousVertical: false,
      
      afterLoad: function(origin: any, destination: any) {
        const currentSection = document.querySelector(
          `.section:nth-child(${destination.index + 1})`
        );
        if (currentSection) {
          currentSection.classList.add(styles.active);
          const event = new CustomEvent('sectionChange', {
            detail: { sectionIndex: destination.index + 1 }
          });
          document.dispatchEvent(event);
        }
      },
      
      onLeave: (origin: any, destination: any) => {
        const previousSection = document.querySelector(
          `.section:nth-child(${origin.index + 1})`
        );
        if (previousSection) {
          previousSection.classList.remove(styles.active);
          previousSection.classList.remove('active');
        }
      },
      loopTop: false,
      loopBottom: false,
      credits: {
        enabled: false
      },
    });

    return () => {
      fullpageInstance.destroy("all");
    };
  }, []);

  return (
    <>
      <Header />
      <div id="fullpage">
        <div className={`section ${styles.section}`} data-index="1">
          <FirstPage />
        </div>
        <div className={`section ${styles.section}`} data-index="2">
          <SecondPage />
        </div>
        <div className={`section ${styles.section}`} data-index="3">
          <ThirdPage />
        </div>
        <div className={`section ${styles.section}`} data-index="4">
          <FourthPage />
        </div>
        <div className={`section ${styles.section}`} data-index="5">
          <FifthPage />
        </div>
      </div>
    </>
  );
};

export default FullPageExample;
