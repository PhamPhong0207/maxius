import React from "react";
import styles from "../styles/FullPageExample.module.css";

const SecondPage = () => {
  return (
    <main className={styles.mainContent}>
      <div className={styles.pageTwo}>
        <div className={styles.pageTwoContent}>
          {/* Banner */}
          <div className={styles.banner2}>
            <div className={styles.textOverlay}>
              <p className="text-one">
                1. <span className="note">Self-produced</span> semiconductors 2. Production
              </p>
              <p className="text-two">
                and Sales of <span className="note">H</span>igh-<span className="note">P</span>erformance <span className="note">S</span>ervers with self-
              </p>
              <p className="text-three">
                manufactured semiconductors 3. Construction
              </p>
              <p className="text-four">
                of operative <span className="note">Block</span><span className="note">chain IDC </span>based on high-
              </p>
              <p className="text-five">
                performance servers 4. Establish solution relating
              </p>
              <p className="text-six">
                <span className="tion">to Blockchain</span>
                <span className="note"> (IPFS) </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SecondPage;
