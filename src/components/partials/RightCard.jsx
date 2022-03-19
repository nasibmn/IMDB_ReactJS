import { Avatar } from "@material-ui/core";
import React from "react";
import {
  RightCardStyle,
  PopularUser,
  PopularUserList,
  UserProfile,
  ProfileEntry,
  Ul,
} from "../styles/styled";
import { profilelist } from "../object/Objects";

const RightCard = () => {
  return (
    <>
      <RightCardStyle className="me-5">
        <div className="card">
          <PopularUser className="card-header bg-dark text-white">
            Popular Users
          </PopularUser>
          <Ul>
            {profilelist.map(({ profile, name, entry }, index) => (
              <PopularUserList className="list-group-item" key={index}>
                <Avatar src={profile} alt="user profile" />
                <UserProfile>
                  <p>{name}</p>
                  <ProfileEntry>{entry}</ProfileEntry>
                </UserProfile>
              </PopularUserList>
            ))}
          </Ul>
        </div>
      </RightCardStyle>
    </>
  );
};

export default RightCard;
