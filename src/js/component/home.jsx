import React from "react";
import OffcanvasExample from "./NavBar.jsx";
import StaticExample from "./Jumbotrom.jsx";
import BasicExample from "./cards.jsx";
import colors from "./colors.json";

//create your first component
const Home = () => {

  const cardColor = colors.map((e, index) => {
    return (<li key={index}>
      <BasicExample class = {e.color}/>
      </li>)
  });

  return (
    <>
      <section>
        <OffcanvasExample />
      </section>
      <section className="main-section">
        <div className="w-75 ">
        <div className="intro-section">
          <StaticExample />
        </div>
        <div className="cards-section">
          {cardColor}
        </div>
        </div>
      </section>
      <footer className="footer-section">
        <div className="footer-content">
            <p>CopyRight© Your Website 2022 </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
