import React from "react";
import OffcanvasExample from "./NavBar.jsx";
import StaticExample from "./Jumbotrom.jsx";
import BasicExample from "./cards.jsx";

//create your first component
const Home = () => {
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
          <BasicExample />
          <BasicExample />
          <BasicExample />
          <BasicExample />
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
