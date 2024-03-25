import React from 'react';
import Navbar from './components/Navbar';
import Featured from './components/Featured';
import PizzaList from './components/PizzaList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container h-full w-full bg-red-600 font-mono">
      <Navbar />
      <head>
      <title>My pizza app</title>
      <meta name='description' content='best pizza in the town' />
      </head>
      <Featured/>
      <PizzaList/>
      <Footer/>
    </div>
  );
}

export default App;
