import { Routes, Route } from "react-router-dom";
import About from "./About";
import Layout from "./components/Layout"; // assuming Layout is a custom component
import Homepage from "./components/Homepage";
import Featured from "./components/Featured"
import PizzaList from './components/PizzaList'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Homepage/>} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Featured/>
      <PizzaList/>
    </Layout>

  );
};

export default App;