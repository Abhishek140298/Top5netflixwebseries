import React from "react";
import Card from "./Card";
import CardData from "./CardData";
import "./App.css";

export default function App() {
  return (
    <>
      <h1>Top 5 Netflix Series</h1>
      <div className="card_call">
        {CardData.map((cval) => {
          return (
            <Card
              imgLink={cval.seriesImage}
              title={cval.title}
              link={cval.link}
            />
          );
        })}
      </div>
    </>
  );
}
