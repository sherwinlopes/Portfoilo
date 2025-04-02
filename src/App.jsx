import React from 'react';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Home from "./components/sections/Home";
import Experience from './components/sections/Experience';

export default function App() {
  return (
    <div className="min-h-screen px-40 mt-24">
      <Navbar />
      <div className="fixed">
        <Card />
      </div>
      <div className="ml-[400px] ">
        <Home />
        <Experience />
      </div>
    </div>

  );
}