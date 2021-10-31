import React, { useEffect, useState } from "react";
import "./SmokeText.css";
import puff from "./hallo.mp4";
import audio from "./hallo.wav";
import { Link } from "react-router-dom";
import loader from "../images/loader.gif";
const SmokeText = () => {
  const [vanish1, setVanish] = useState(false);
  const [vanish2, setVanish2] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVanish(true);
    }, 8900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setVanish2(false);
    }, 8900);
    return () => clearTimeout(timer1);
  }, []);

  return (
    <>
      <div className=" vid ">
        <video width="1500px" autoPlay muted>
          <source src={puff} type="video/mp4" />
        </video>
      </div>
      {vanish2 ? (
        " "
      ) : (
        <>
          <div className="add_constestant">
            <Link to="/add">
              <div className="buttonstyle">
                BE A GHOST.. <img src={loader} className="btm-img" />
              </div>
            </Link>
          </div>
        </>
      )}

      {vanish1 ? (
        " "
      ) : (
        <>
          <section>
            <h1>
              {" "}
              <span>A</span>
              <span>r</span>
              <span>e</span>
              <span>n</span>
              <span>a</span>
              <span>...</span>
              <span>H </span>
              <span>a </span>
              <span>u </span>
              <span>n </span>
              <span>t </span>
              <span>e </span>
              <span>d </span>
              <span>...</span>
              <span>To </span>
              <span>... </span>
              <span>W</span>
              <span>E</span>
              <span>L</span>
              <span>C</span>
              <span>O</span>
              <span>M</span>
              <span>E</span>
            </h1>
          </section>
        </>
      )}
    </>
  );
};

export default SmokeText;

//Be the Ghost of this Arena
