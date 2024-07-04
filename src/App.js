import React from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import Gallery from "./components/Gallery";
import datamain from "./components/data";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <About />
     <Gallery heading={datamain.heading} title={datamain.title} data={datamain.data} />
     <Services />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
