// import React from 'react';
// import Navbar from './components/Navbar';
// import Featured from './components/Featured';
// import PizzaList from './components/PizzaList';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="container h-full w-full bg-red-600 font-mono">
//       <Navbar />
//       <head>
//       <title>My pizza app</title>
//       <meta name='description' content='best pizza in the town' />
//       </head>
//       <Featured/>
//       <PizzaList/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // Remove duplicate import of React
// import Navbar from './components/Navbar';
// import Featured from './components/Featured';
// import PizzaList from './components/PizzaList';
// import Footer from './components/Footer';

// function Home() {
//   const [pizzaList, setPizzaList] = useState([]);
//   const [admin, setAdmin] = useState(false);
//   const [close, setClose] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/products");
//         setPizzaList(response.data);
//         const myCookie = document.cookie;
//         if (myCookie.includes(`token=${process.env.TOKEN}`)) {
//           setAdmin(true);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       <Head>
//         <title>Pizza Restaurant in Newyork</title>
//         <meta name="description" content="Best pizza shop in town" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Featured />
//       {admin && <AddButton setClose={setClose} />}
//       <PizzaList pizzaList={pizzaList} />
//       {!close && <Add setClose={setClose} />}
//     </div>
//   );
// }

// export default Home;


//----------------------------------------------------------------


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Featured from './components/Featured';
import PizzaList from './components/PizzaList';
import Footer from './components/Footer';

function App() {
  const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the API request
        const response = await axios.get('/api/products');
        // Set the response data to state
        setPizzaList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  return (
    <div className="container h-full w-full bg-red-600 font-mono">
      <Navbar />
      <head>
        <title>My pizza app</title>
        <meta name='description' content='best pizza in the town' />
      </head>
      <Featured />
      <PizzaList pizzaList={pizzaList} /> {/* Pass the pizzaList data to the PizzaList component */}
      <Footer />
    </div>
  );
}

export default App;
