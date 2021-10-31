import React, { useState, useEffect } from "react";
import { Card2 } from "./Card2";
import Slider from "./Cards";
import API from "../../API/API";
import { Link } from "react-router-dom";
import loader from "../images/loader.gif";
/**
 * @author
 * @function CardSlider
 **/
export const CardSlider = (props) => {
  const [contestant, setContestant] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const { getContestants } = API;
    getContestants().then((res) => {
      setContestant(res.data);
      setLoading(false);
      // allContestant(res.data);
    });
  }, []);
  console.log(contestant);

  return (
    <div
      style={{
        display: "flex-column",
        backgroundColor: "black",
        scrollBehavior: "smooth",
        overflowX: "hidden",
      }}
    >
      <div style={{ paddingTop: "2rem" }}>
        {" "}
        <Slider />
      </div>
      <h2 style={{ color: "white", display: "flex", justifyContent: "center" }}>
        Best Outfits{" "}
      </h2>
      <br /> <br />
      <div className="container">
        {!loading ? (
          contestant.length > 0 ? (
            contestant.map((con) => {
              return (
                <div key={con.id}>
                  <Card2 props={con} />
                </div>
              );
            })
          ) : (
            <div>
              <h1>Sorry No Contestant to show </h1>
              <img src={loader} className="btm-img" />
            </div>
          )
        ) : (
          <div style={{ margin: "auto", color: "white" }}>
            <img src={loader} className="img-loader" />
            <br />
            Loading...
          </div>
        )}
        {/* <Card2 /> */}
        <div className="">
          <Link to="/add">
            <div className="card">
              <img
                src={
                  props?.props?.costumeImgUrl ??
                  "https://cdn.discordapp.com/attachments/902584923372810350/902587007925108806/D.png"
                }
                alt="Person"
                className="card__image"
              />
              <p className="card__name">Be The Ghost..</p>
              <div className="">
                <div
                  style={{
                    margin: "auto",
                    fontSize: "18px",
                    marginBottom: "10px",
                  }}
                >
                  Join the party now !
                </div>
              </div>

              <button className="btn draw-border">JOIN</button>
              {/* on click pass obj in view model  */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
