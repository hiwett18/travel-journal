import React from "react"
import loc from "/images/loc.jpeg"
export default function Section(props) {
    return (
        <section className="section-card">
           <img className="travel-image" src={props.img}/> 
           <div className="text">
            <h3 className="text-one"><img className="loc-img" src={loc}/> {props.location}</h3> 
            <h2>{props.name}</h2>
            <p>{props.paragraph}</p>
           </div>
        </section>
    )
}