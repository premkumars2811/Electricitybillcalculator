import "./App.css";
import Header from "./header&footer/Header";
import Footer from "./header&footer/Footer";
import Home from "./Main/Home";
import Calculator from "./Main/Calculator";
import Chart from "./Main/Chart";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="chart" element={<Chart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
