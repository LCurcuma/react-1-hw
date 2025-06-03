import styles from './page.module.css';
import OurValues from './OurValues.js'
import OurCrew from './OurCrew';
import OurPartners from './OurPartners';


export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues/>
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurCrew/>
        </section>

         {/* TASK - React 1 week 1 */}
         {/* Add in the "OurPartners" component here */}
         <section className='card'>
          <h2>Our Partners</h2>
          <OurPartners/>
         </section>
      </main>
    </div>
  );
}

export default Crew;

// TASK - React 1 week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files
// OurValues.js, OurCrew.js, OurPartners.js should live in this folder
// import and use the components from the newly created files

// const OurValues = () => {
//   // TASK - React 1 week 1
//   // Create the "Our Values" section
//   // Use the descriptions provided in /app/about_us/README.md
//   // Some inspiration ideas found in /data/inspiration_about_us

//   /*added "Our Values" section*/
//   return (
//     <section>
//     <p><b>Exploration</b>: We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.</p>
//     <p><b>Innovation</b>: At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.</p>
//     <p><b>Sustainability</b>: We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.</p>
//     <p><b>Community</b>: We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.</p>
//     </section>
//   );
// };

// const OurCrew = () => {
//   // TASK - React 1 week 1
//   // Create the "Our Crew section"
//   // Use the descriptions provided in /app/about_us/README.md
//   // Use the pictures from /public/crew
//   // Some inspiration ideas found in /data/inspiration_about_us
//   return (
//     <section>
//       <p>
//       Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.
//       </p>
//       <img src="/crew/image-anousheh-ansari.png" alt="Captain Sarah Vega"></img>
//       <p>Captain Sarah Vega: A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.</p>
//       <img src="/crew/image-douglas-hurley.png" alt="Dr. Leo Redding"></img>
//       <p>Dr. Leo Redding: Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.</p>
//       <p>Chief Engineer Hana Lee: With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.</p>
//       <img src="/crew/image-mark-shuttleworth.png"></img>
//       <p>Mission Specialist Alex Santos: As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.</p>
//       <p>Crew Member Maya Patel: Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.</p>
//     </section>
//   );
// }

// const OurPartners = () => {
//   // TASK - React 1 week 1
//   // Create the "Our Crew section"
//   // Use the descriptions provided in /app/about_us/README.md
//   // Use the pictures from /public/crew
//   // Some inspiration ideas found in /data/inspiration_about_us
//   return (
//     <section>
//     <p>We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary.</p>
//     <img src="/business_partners/alphabet-logo.png" className={styles.logo}></img>
//     <img src="/business_partners/amazon_logo.png" className={styles.logo}></img>
//     <img src="/business_partners/CBC_Logo_White.png" className={styles.logo}></img>
//     <img src="/business_partners/Microsoft-Logo-white.png" className={styles.logo}></img>
//     <img src="/business_partners/nyu-logo.png" className={styles.logo}></img>
//     <img src="/business_partners/QueensLogo_white.png" className={styles.logo}></img>
//     <img src="/business_partners/samsung-logo.png" className={styles.logo}></img>
//     <img src="/business_partners/sodexo-logo.png" className={styles.logo}></img>
//     </section>
//   );
// }