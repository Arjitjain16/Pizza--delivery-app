// import React from 'react';
// import PizzaCard from './PizzaCard';

// function PizzaList() {
//   return (
//     <div>
//       <div className="container flex items-center justify-center gap-6 flex-col  mt-8 bg-white">
//       <title>My pizza app</title>
//       <h1 className='text-4xl pt-8'>The Best Pizza in Town</h1>
//       <p className='desc p-7 w-4/5 text-2xl'>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde reprehenderit dolorum repellat iure, est porro adipisci debitis sed, fugit quasi odio incidunt, voluptas dolores nostrum vero dicta inventore quam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, cum.
//       </p>
//       <div className="wrapper w-screen flex flex-row items-center justify-center gap-x-40  ">
//         <PizzaCard/>
//         <PizzaCard/>
//         <PizzaCard/>
//         <PizzaCard/>
//         <PizzaCard/>
//         <PizzaCard/>
//         <PizzaCard/>
//         <PizzaCard/>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default PizzaList;


import styles from "../components/style/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
      </div>
    </div>
  );
};

export default PizzaList;