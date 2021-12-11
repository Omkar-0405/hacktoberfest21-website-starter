import React, { useState } from "react";
import API from "../../API/API";
import "./Modal_css.css";
import pumpkin from "../images/D.png";
import { useHistory } from "react-router";
// import { AiOutlineHome } from "react-icons/ai";
// import { MdOutlineArrowForward } from "react-icons/md";
const Modal = () => {
  const [name, setName] = useState("");
  const [costumeTitle, setCostumeTitle] = useState("");
  const [costumeImgUrl, setCostumeImgUrl] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const { addContestant } = API;
  const his = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, costumeTitle, costumeImgUrl, city, country);
    addContestant({
      name,
      costumeTitle,
      costumeImgUrl,
      city,
      country,
    }).then((res) => {
      if (res.status === 201) {
        console.log(res);
        his.push("/home");
      }
      if (res.status === 400) {
        console.log(res);
      }
    });
  };

  return (
    <div className="add_pin_modal">
      <div className="add_pin_container">
        <div className="side" id="left_side">
          <div className="section2">
            <div className="pumpkin">
              <img src={pumpkin} alt="" />
            </div>
            <div
              className="modal_pin"
              style={
                {
                  // display: showModalPin ? "block" : "none",
                }
              }
            >
              <div className="pin_image">
                <img
                  // onLoad={check_size}
                  src={
                    costumeImgUrl ??
                    "https://cdn.discordapp.com/attachments/902584923372810350/902587007925108806/D.png"
                  }
                  alt="pin_image"
                />
              </div>
            </div>
          </div>

          <div className="section3">
            {/* <div className="save_button"> */}
            {/* <div className="pumpkin">
                <img src={pumpkin} alt="" />
              </div> */}
            {/* <div className="save_from_site">Save From Site</div> */}
            {/* </div> */}
          </div>
        </div>

        <div className="side" id="right_side">
          <div className="section2" style={{ marginTop: "30px" }}>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Name"
                type="text"
                className="new_pin_input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Costume Title"
                type="text"
                className="new_pin_input"
                value={costumeTitle}
                onChange={(e) => setCostumeTitle(e.target.value)}
              />
              <input
                placeholder="Costume Image Url"
                type="text"
                className="new_pin_input"
                value={costumeImgUrl}
                onChange={(e) => setCostumeImgUrl(e.target.value)}
              />

              <input
                placeholder="City"
                type="text"
                className="new_pin_input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                placeholder="Country"
                type="text"
                className="new_pin_input"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  className="save_pin"
                  onClick={handleSubmit}
                  style={{ marginRight: "10px" }}
                >
                  SAVE
                </div>
                <div
                  className="save_pin"
                  onClick={() => {
                    his.push("/home");
                  }}
                >
                  Home
                  {/* <MdOutlineArrowForward /> */}
                </div>
              </div>
            </form>
            {/* <div className="section1">
              <div className="select_size">
                <div className="save_pin">Save</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
