import React, { useEffect, useState } from "react";
import "./Modal.css";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

const check_size = (event) => {
  const image = event.target;
  image.classList.add("pin_max_width");

  if (
    image.getBoundingClientRect().width <
      image.parentElement.getBoundingClientRect().width ||
    image.getBoundingClientRect().width <
      image.parentElement.getBoundingClientRect().width
  ) {
    image.classList.remove("pin_max_width");
    image.classList.add("pin_max_height");
  }
  image.style.opacity = 1;
};

const ViewCon1 = () => {
  const [name, setName] = useState("");
  const [costumeTitle, setCostumeTitle] = useState("");
  const [costumeImgUrl, setCostumeImgUrl] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const his = useHistory();
  // let { id } = useParams();
  // console.log("id", id);
  const loc = useLocation();
  let { userId } = loc?.state ?? "qwerty";
  console.log("id", userId);
  useEffect(() => {
    axios
      .get(
        `https://6c841112-7c87-47ef-a956-03b6484aa343.mock.pstmn.io/contestants/${userId}`
      )
      .then((res) => {
        if (res.status === 200) {
          setName(res.data.name);
          setCostumeImgUrl(res.data.costumeImgUrl);
          setCountry(res.data.country);
          setCostumeTitle(res.data.costumeTitle);
          setCity(res.data.city);
        }
        if (res.status === 400) {
          console.log(res);
        }
      });
  });
  const updateCon = () => {
    axios
      .patch(
        `https://6c841112-7c87-47ef-a956-03b6484aa343.mock.pstmn.io/contestants/${userId}`
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          his.push("/home");
        }
        if (res.status !== 200) {
          console.log(res);
          alert(res.message);
          his.push("/home");
        }
      });
    his.push("/home");
  };

  const deleteCon = () => {
    axios
      .delete(
        `https://6c841112-7c87-47ef-a956-03b6484aa343.mock.pstmn.io/contestants/${userId}`
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          alert(`${userId} Deleted Sucessfuly`);
          his.push("/home");
        }
        if (res.status === 400) {
          console.log(res);
          alert(`Can't Delete ${userId}`);
        }
      });
  };

  return (
    <div className="add_pin_modal_">
      <div className="add_pin_container_">
        <div className="side_" id="left_side_">
          <div className="section2">
            <label htmlFor="upload_img" id="upload_img_label">
              <img
                onLoad={check_size}
                src={
                  costumeImgUrl ??
                  "https://cdn.discordapp.com/attachments/902584923372810350/902587007925108806/D.png"
                }
                alt="pin_image"
              />
            </label>
          </div>
        </div>

        <div className="side_" id="right_side_">
          <div className="section2">
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
              disabled
            />

            <input
              placeholder="City"
              type="text"
              className="new_pin_input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              disabled
            />
            <input
              placeholder="Country"
              type="text"
              className="new_pin_input"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              disabled
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              onClick={() => updateCon()}
              className="save_pin_button"
              style={{ marginLeft: "30px" }}
            >
              Update
            </div>
            <div
              onClick={() => deleteCon()}
              className="save_pin_button"
              style={{ marginLeft: "30px" }}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCon1;
