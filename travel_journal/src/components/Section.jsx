import React from "react"
import loc from "/images/loc.jpeg"
export default function Section(props) {
    return (
        <section className="section-card">
           <img className="travel-image" src={props.img}/> 
           <div className="text">
                <div className="text-one">
                    <h3><img className="loc-img" src={loc}/> {props.location}</h3> 
                    <a href={props.map}>View on Google Maps</a>
                </div>
            <h2>{props.name}</h2>
            <h4><b>{props.date}</b></h4>
            <p>{props.paragraph}</p>
           </div>
        </section>
    )
}