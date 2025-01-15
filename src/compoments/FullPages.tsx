'use client';
import React, { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styles from "../styles/FullPageExample.module.css";

import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import Header from './Header';

const FullPageExample: React.FC = () => {
  return (
    <>
      <Header />
      <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'} // Có thể bỏ qua nếu dùng bản free
        scrollingSpeed={1000}
        navigation={true}
        navigationPosition={'right'}
        anchors={["section1", "section2", "section3", "section4", "section5"]}
        normalScrollElements={'.tableDesc'}
        scrollOverflow={true}
        scrollOverflowReset={true}
        fitToSection={true}
        touchSensitivity={15}
        continuousVertical={false}
        credits={{enabled: false}}
        
        afterLoad={(origin: any, destination: any) => {
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
        }}
        
        onLeave={(origin: any, destination: any) => {
          const previousSection = document.querySelector(
            `.section:nth-child(${origin.index + 1})`
          );
          if (previousSection) {
            previousSection.classList.remove(styles.active);
            previousSection.classList.remove('active');
          }
        }}

        render={({ state, fullpageApi }) => {
          return (
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
          );
        }}
      />
    </>
  );
};

export default FullPageExample;
