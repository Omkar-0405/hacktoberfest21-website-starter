import React from "react";
import "./card2.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import axios from "axios";
import { useHistory } from "react-router";
/**
 * @author krish
 * @function Card2
 **/

export const Card2 = (props) => {
  console.log(props?.props);
  const history = useHistory();
  // get random liked count in prop
  const [isLiked, setLiked] = React.useState(true);
  const [likes, setLikes] = React.useState(
    props?.props?.votes ?? Math.floor(Math.random() * 100)
  );

  let id = props?.props?.id;
  const viewDetails = () => {
    history.push({
      pathname: `/view/${id}`,
      state: { userId: id },
    });
  };

  const addLike = () => {
    axios
      .patch(
        `https://6c841112-7c87-47ef-a956-03b6484aa343.mock.pstmn.io/contestants/${id}/upvote`
      )
      .then((resp) => {
        console.log(resp);
        // resp.status == "ok"
        //   ? (setLiked(!isLiked), setLikes(likes + 1))
        //   : alert("error")}
      });

    setLiked(!isLiked);
    setLikes(likes + 1);
  };
  const removeLike = () => {
    setLiked(!isLiked);
    setLikes(likes - 1);
  };

  return (
    <div>
      {/* <div className="container"> */}
      <div className="card">
        <img
          src={
            props?.props?.costumeImgUrl ??
            "https://cdn.discordapp.com/attachments/902584923372810350/902587007925108806/D.png"
          }
          alt="Person"
          className="card__image"
        />
        <p className="card__name">{props?.props?.name}</p>
        <div className="">
          <div
            style={{
              margin: "auto",
              fontSize: "22px",
              marginBottom: "10px",
            }}
          >
            {props?.props?.costumeTitle}
          </div>
        </div>

        <div className="grid-container">
          <div className="grid-child-followers">
            {isLiked ? (
              <AiOutlineHeart size={26} onClick={addLike} />
            ) : (
              <AiFillHeart size={26} onClick={removeLike} />
            )}
          </div>
          <div className="grid-child-followers">{likes}</div>
        </div>

        <button onClick={viewDetails} className="btn draw-border">
          View
        </button>
        {/* on click pass obj in view model  */}
      </div>
    </div>
    // </div>
  );
};
