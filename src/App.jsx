import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Featured from './components/Featured';
import PizzaList from './components/PizzaList';

function App() {
  return (
    <div className="container h-full w-full bg-red-600">
      <Navbar />
      <head>
      <title>My pizza app</title>
      <meta name='description' content='best pizza iun the town' />
      </head>
      <Featured/>
      <Footer/>
      <PizzaList/>
    </div>
  );
}

export default App;
