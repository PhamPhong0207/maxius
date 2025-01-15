import React from "react";
import styles from "../styles/FullPageExample.module.css";
const ThirdPage = () => {
  return (
    <div className={styles.pageThree}>
      {/* Background Banner */}
      <div className={styles.banner3}>
        <img
          id="banner3"
          src="/img/banner3.png"
          alt="banner3"
          className={styles.banner}
        />
      </div>
      <div className={styles.pageThreeContent}>
        {/* Column 1 */}
        <div className={styles.navColumn}>
          <div className={styles.navItem}>
            <p className={styles.title}>Product</p>
            <p className={styles.desc}>
              <span className={styles.note}>High-Performance Server</span> with an extensive selection of serviceable capabilities<br />
              Building <span className={styles.note}>IDC</span>; incorporating the latest <span className={styles.note}>Storage</span> technology applicable to various I/O devices<br />
              Various <span className={styles.note}>Blockchain Solutions</span>, including IPFS.<br /><br />
              Maxius will continue to develop as a company in the global market by supplying a variety of products and solutions.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className={styles.navColumn}>
          <div className={styles.navItem}>
            <p className={styles.title}>Technology</p>
            <p className={styles.desc}>
              Based on more than 20 years of research know-how <br />
              and technology, we are the only company in Korea <br />
              that makes HPC servers <span className={styles.note}>using self-developed system</span><br />
              semiconductors and <span className={styles.note}>provides solutions specialized</span><br />
              in <span className={styles.note}>the intelligent data center</span> in the IT industry.<br /><br />
              With our services, Maxius strives to supply<br /> differentiated products and solutions.
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className={styles.navColumn}>
          <div className={styles.navItem}>
            <p className={styles.title}>Application</p>
            <p className={styles.desc}>
              Maxius' miscellaneous products are used for <span className={styles.note}>AI/genetic analysis,</span><br />
              <span className={styles.note}>edge computing, IDC centers,</span> as well as various solutions<br />
              used for vast <span className={styles.note}>data analysis,</span> <span className={styles.note}>distributed</span><br />
              <span className={styles.note}>processing functions and IPFS IDC</span>, etc.<br /><br />
              Maxius will supply serviceable products and solutions to<br /> varying fields through R&D and communication.
            </p>
          </div>
        </div>

        {/* Column 4 */}
        <div className={styles.navColumn}>
          <div className={styles.navItem}>
            <p className={`${styles.title} ${styles.blockchainTitle}`}>Blockchain</p>
            <p className={styles.desc}>
              <span className={styles.note}>storage and service</span> utilized in Metaverse <br />
              <span className={styles.note}>IPFS Storage and Application Services</span> in Web3.0 <br /><br />
              Maxius provides both H/W and S/W, which are optimized for decentralized storage to match customer needs and create the best added value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
