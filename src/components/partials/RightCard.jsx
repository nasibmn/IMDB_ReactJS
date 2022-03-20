import React from "react";
import {
  RightCardStyle,
  PopularUser,
  PopularUserList,
  UserProfile,
  ProfileEntry,
  Avatar,
  Ul,
} from "../styles/styled";
import { profilelist } from "../object/Objects";
import { useState } from "react";

const RightCard = () => {
  const [showUsers, setShowUsers] = useState(true);
  return (
    <div className={showUsers ? "show-user" : ""}>
      <RightCardStyle className="rightstyle me-5">
        <div className="card">
          <PopularUser
            className="card-header bg-dark text-white"
            onClick={() => setShowUsers(!showUsers)}
          >
            Popular Users
          </PopularUser>
          <Ul className="user-ul">
            {profilelist.map(({ profile, name, entry }, index) => (
              <PopularUserList className="list-group-item" key={index}>
                <Avatar src={profile} alt="user profile" />
                <UserProfile className="userprofile">
                  <p>{name}</p>
                  <ProfileEntry>{entry}</ProfileEntry>
                </UserProfile>
              </PopularUserList>
            ))}
          </Ul>
        </div>
      </RightCardStyle>
    </div>
  );
};

export default RightCard;
