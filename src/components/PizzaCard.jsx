// import Image from "next/image";
import styles from "../components/style/PizzaCard";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <img src="/img/mixed-pizza-with-various-ingridients-removebg-preview.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;