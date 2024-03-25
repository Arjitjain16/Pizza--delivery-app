// import Image from "next/image";
import styles from "../components/style/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <img src="/img/pizza-card-img.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>rs.199</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;