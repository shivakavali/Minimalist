import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from "./Components/slider";
import Navbar from "./Components/navbar";
import Main from "./Components/Main";
import Footer from "./Components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header className="header">
          <Slider />
          <Navbar />
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
