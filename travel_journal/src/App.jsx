import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Section from "./components/Section"
import places from './components/places';

function App() {
  

  return (
    <div>
      <Navbar /> 
      {places.map((place)=>{
        return(
          <Section className="hero" img={place.img} name={place.name} map={place.map} location={place.location} date={place.date} paragraph={place.paragraph}/> 
        )
      })}
    </div>
  )
}

export default App
