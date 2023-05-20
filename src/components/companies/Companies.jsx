import React from "react";
import "./Companies.css";
const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./prologis.png" alt="company 1"/>
        <img src="./tower.png" alt="company 2" />
        <img src="./equinix.png" alt="company 3" />
        <img src="./realty.png" alt="company 4"/>
      </div>
    </section>
  );
};

export default Companies;
