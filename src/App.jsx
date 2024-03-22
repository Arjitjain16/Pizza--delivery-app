import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Navbar />
      <head>
      <title>My pizza app</title>
      <meta name='description' content='best pizza iun the town' />
      </head>
      <div className="content bg-red-600 flex h-full w-full">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
