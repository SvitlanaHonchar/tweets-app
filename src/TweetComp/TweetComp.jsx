import React from "react";
import userAvatar from "../images/Boy.png";
import userLine from "../images/Rectangle.png";
import pictureBackground from "../images/pictureBackground.png";
import { StyledDiv } from "./TweetComp.styled";

const TweetComp = () => {
  return (
    <StyledDiv>
      <img src={`${pictureBackground}`} alt="pictureBackground" />
      <img src={`${userAvatar}`} alt="userAvatar" />
      <img src={`${userLine}`} alt="decorative line" />

      <p>777 tweets</p>
      <p>100500 followers</p>
      <button type="button">follow</button>
    </StyledDiv>
  );
};

export default TweetComp;
