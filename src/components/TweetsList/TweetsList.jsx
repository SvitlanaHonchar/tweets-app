import React from "react";
import TweetComp from "../Tweet/Tweet";
import { useSelector } from "react-redux";
import { selectLoading, selectUsers } from "../../redux/usersSelectors";
import { StyledUl } from "./TweetsList.styled";

const TweetsList = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);
  return (
    <StyledUl>
      {!isLoading &&
        users.length > 0 &&
        users.map((user) => {
          return (
            <li key={user.id}>
              <TweetComp user={user} />
            </li>
          );
        })}
    </StyledUl>
  );
};

export default TweetsList;
