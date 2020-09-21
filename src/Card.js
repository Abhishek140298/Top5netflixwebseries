import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="card">
      <img className="series_image" src={props.imgLink} />

      <h4 className="head">A Netflix Series</h4>
      <h4 className="series_name">{props.title}</h4>
      <a href={props.link}>
        <button>Expplore</button>
      </a>
    </div>
  );
}
