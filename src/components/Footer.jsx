
import styles from "../components/style/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img src="/img/pngwing.com (8).png" className="object-contain"  alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE Brew PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}> 
            2356 K. karode Bypass Sector 9.
            <br /> Bhopal, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1614 E. Indrapuri A sector #44.
            <br /> Bhoapl, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 W. Minal recidency 44 B-PARK.
            <br /> Bhopal, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;