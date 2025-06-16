import styles from './page.module.css';

export default function OurPartners() {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <section>
    <p className={styles.parag}>We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary.</p>
    <div className={styles.images}>
      <img src="/business_partners/alphabet-logo.png" className={styles.logo}></img>
    <img src="/business_partners/amazon_logo.png" className={styles.logo}></img>
    <img src="/business_partners/CBC_Logo_White.png" className={styles.logo}></img>
    <img src="/business_partners/Microsoft-Logo-white.png" className={styles.logo}></img>
    <img src="/business_partners/nyu-logo.png" className={styles.logo}></img>
    <img src="/business_partners/QueensLogo_white.png" className={`${styles.logo}, ${styles.queens}`}></img>
    <img src="/business_partners/samsung-logo.png" className={styles.logo}></img>
    <img src="/business_partners/sodexo-logo.png" className={styles.logo}></img>
    </div>
    </section>
  );
}