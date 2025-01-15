
import styles from "../styles/FullPageExample.module.css";

const PageFirst = () => {
  return (
    <div>
      <header className={styles.header}>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.pageOne}>
          <div className={styles.pageOneContent}>
            {/* Banner */}
            <div className={styles.banner}>
              <img
                id="banner"
                src="/img/page1.png"
                alt="banner"
                className={styles.bannerImage}
              />
            </div>

            {/* Text */}
            <div className={styles.pageOneText}>
              <div className={styles.mdText}>
                <h1 id="title" className={styles.title}>
                  MAX I & US
                </h1>
              </div>
              <div className={styles.smText}>
                <p id="description" className={styles.description}>
                  Maxius is the only self-developed semiconductor company that
                  focuses on developing High-Performance Servers. We provide
                  specialized solutions tailored towards different sectors of
                  the IT industry and strive to break into the global market as
                  a leader in server technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Side Navigation */}
      <div className={styles.sideNav}>
        <div className={styles.indicator}></div>
        <div className={styles.indicator}></div>
        <div className={`${styles.indicator} ${styles.active}`}></div>
        <div className={styles.indicator}></div>
        <div className={styles.indicator}></div>
      </div>
    </div>
  );
};

export default PageFirst;
  