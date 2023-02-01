import React from "react";
import "./App.css";
import Footer from "./footer/Footer";
import Header from "./header/header1";
import Show from "./shows/Show";
import ImageSlider from "./slider/ImageSlider";
import Trending from "./trending/Trending";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageSlider style={{zIndex:'-2'}}/>
      <Trending />
      <Show />
      <Footer />
    </div>
  );
}

export default App;
