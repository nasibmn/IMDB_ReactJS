import styled from "styled-components";

// body part ...................................................................
export const Container = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  width: 1280px;
  background: var(--color2);
  opacity: 1;
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
`;

// Navbar parts ...............................................................
export const Header = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: var(--color1);
  display: flex;
  justify-content: space-between;
  padding: 0 76px 0 76px;
  align-items: center;
  height: 69.5px;
  border-bottom: 4px solid var(--color2);
  @media only screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 20px 0 20px;
    .logo {
      height: 20px;
      margin-left: -10px;
      margin-right: 10px;
    }
    .search {
      padding-right: 50px;
    }
  }
`;
export const SearchnAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Search = styled.input`
  top: 10px;
  left: 886px;
  width: 273px;
  height: 50px;
  @media only screen and (max-width: 768px) {
    width: 230px;
    height: 40px;
  }
  background: var(--color2);
  padding-left: 60px;
  border: 1px solid var(--color3);
  color: var(--color5);
  font-size: 20px;
  font-weight: 500;
  border-radius: 25px;
  opacity: 1;
`;

export const SearchLogo = styled.img`
  position: absolute;
  align-items: center;
  margin-left: 20px;
  width: 20px;
  height: 20px;
  background: transparent url("img/search.png") 0% 0% no-repeat padding-box;
  opacity: 1;
`;
export const Avatar = styled.img`
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  width: 34px;
  height: 34px;
  border-radius: 50%;
  opacity: 1;
`;

// Left Bar parts ....................................................................
export const LeftBarStyle = styled.div`
  position: fixed;
  width: inherit;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  background-color: var(--color2);
  margin-top: 69.5px;
  justify-content: center;
  padding-left: 74px;
  @media only screen and (max-width: 1200px) {
    padding-left: 10px;
    margin-right: -30px;
    font-size: 10px;
  }
`;

export const LeftTitle = styled.div`
  position: sticky;
  top: 0;
  background-color: var(--color2);
  z-index: 100;
  display: flex;
  height: 60px;
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.16px;
  color: var(--color7);
  &:hover {
    color: var(--color8);
    transition: all 0.7s ease;
  }
  @media only screen and (max-width: 768px) {
    height: 40px;
    font-size: 0.66rem;
  }
`;
export const Hr = styled.div`
  border-top: 4px solid var(--color8);
  border-radius: 2px;
  position: absolute;
  bottom: 0;
  width: 100%;
  @media only screen and (max-width: 768px) {
    border-top: 3px solid var(--color8);
    width: 70%;
    margin-left: 0;
  }
`;
export const Card = styled.div`
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    opacity: 0.7;
    scale: 1.01;
  }
  margin-bottom: 10px;
  font-size: 0.7rem;
  border-radius: 5px;
  background: var(--color1);
  opacity: 1;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding: 0;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  color: var(--color7);
  margin-bottom: -10px;
  @media only screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Title = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: left;
`;
export const CardText = styled.div`
  cursor: pointer;
  &:hover {
    transition: opacity 0.9s ease;
    opacity: 0.3;
  }
  :last-child {
    position: absolute;
    right: 0;
    text-align: right;
  }
  margin-right: 20px;
  @media only screen and (max-width: 1200px) {
    font-size: 0.5rem;
    :last-child {
      display: flex;
      position: relative;
    }
    margin-right: -20px;
  }
  align-items: center;
`;

export const Img = styled.img`
  @media only screen and (max-width: 768px) {
    height: 10px;
  }
`;

export const ImgMore = styled.img`
  position: absolute;
  margin-top: 10px;
  margin-right: 3px;
  right: 0;
  top: 0;
  height: 15px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    height: 10px;
    margin-top: 10px;
    margin-right: 5px;
  }
`;
// -----------------------------------------------------------------------------------------

// Feed Parts --------------------------------------------------------------------------------

export const SpanName = styled.strong`
  font-size: 0.9rem;
  cursor: pointer;
  transition: opacity 0.3s ease-in;
  &:hover {
    opacity: 0.5;
  }
  @media only screen and (max-width: 1200px) {
    margin-left: -10px;
    font-size: 9px;
  }
`;

export const FeedCardStyle = styled.div`
  margin-bottom: 10px;
  font-size: 0.7rem;
  border-radius: 5px;
  background: var(--color1);
  opacity: 1;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding: 0;
  }
`;

export const FeedStyle = styled.div`
  position: fixed;
  width: inherit;
  top: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  background-color: var(--color2);
  margin-top: 69.5px;
  transition: all 0.6s ease;
`;

export const FeedCardInfo = styled.div`
  display: flex;
  color: var(--color7);
  margin-left: 20px;
  margin-right: -20px;
  margin-top: -10px;
  margin-bottom: -20px;
  align-items: center;
  text-align: center;
  @media only screen and (max-width: 768px) {
    margin-left: -30px;
    font-size: 0.6rem;
  }
`;

export const SpanDate = styled.strong`
  top: 0px;
  left: 74px;
  width: 139px;
  font-weight: bold !important;
  font-size: 0.6rem !important;
  font-family: "robot", sans-serif;
  @media only screen and (max-width: 768px) {
    display: flex;
    margin-left: -20px;
    font-size: 0.4rem !important;
  }
  text-align: left;
  color: #aaaaaa;
`;

export const FeedTitle = styled.div`
  margin-left: 25px;
  margin-bottom: 20px;
  span {
    text-align: justify;
    font-size: 0.88rem;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 768px) {
    margin-left: -25px;
    span {
      background-color: white;
      text-align: justify;
      padding-left: 0;
      margin-bottom: 10px;
      font-size: 0.6rem;
    }
    margin-bottom: -10px;
    width: 150%;
  }
`;

export const FeedCardText = styled.div`
  cursor: pointer;
  &:hover {
    transition: opacity 0.9s ease;
    opacity: 0.3;
  }
  margin-left: 10px;
  padding-right: 20px;

  @media only screen and (max-width: 1200px) {
    margin-right: -20px;
    margin-top: 20px;
    align-items: center;
  }
`;
export const FeedBg = styled.img`
  width: 70%;
  margin-bottom: 20px;
  border-radius: 20px;
  @media only screen and (max-width: 768px) {
    width: 200px;
  }
`;

export const FeedPostInfo = styled.div`
  @media only screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;

export const FeedImgMore = styled.img`
  cursor: pointer;
  &:hover {
    opacity: 0.2;
  }
  @media only screen and (max-width: 1200px) {
    height: 12px;
  }
  position: absolute;
  right: 0;
  top: 0;
`;

export const ReplyInput = styled.input`
  height: 50px;
  padding-left: 40px;
  border: none;
  margin-bottom: 100px;
  @media only screen and (max-width: 1200px) {
    padding-left: 10px;
    font-size: 0.6rem;
  }
`;

export const ImgInput = styled.img`
  margin-top: 12px;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  &:hover {
    opacity: 0.6;
    scale: 1.05;
  }
  position: absolute;
  right: 0;
  @media only screen and (max-width: 1200px) {
    margin-top: 20px;
    height: 13px;
  }
`;
// ----------------------------------------------------------------------------------------------------

// Right Bar Parts -------------------------------------------------------------------------------------
export const RightBarStyle = styled.div`
  position: fixed;
  width: inherit;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  background-color: var(--color2);
  margin-top: 69.5px;
  z-index: 1;
  @media only screen and (max-width: 1200px) {
    margin-left: -20px;
  }
`;

export const RightCardStyle = styled.div`
  cursor: pointer;
  transition: all 0.3s ease-out;
  li &:hover {
    opacity: 0.7;
    scale: 1.01;
  }
  margin-bottom: 10px;
  font-size: 0.7rem;
  border-radius: 5px;
  background: var(--color1);
  opacity: 1;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding: 0;
  }
`;

export const Ul = styled.ul`
  background-color: var(--color2);
  border: none !important;
  padding: 0;
  margin: 0;
`;

export const PopularUser = styled.label`
  height: 50px;
  display: flex;
  font-size: 1rem;
  align-items: center;
  @media only screen and (max-width: 1200px) {
    font-size: 0.7rem;
  }
`;

export const PopularUserList = styled.li`
  cursor: pointer;
  border: 0;
  transition: all 0.5s ease;
  &:hover {
    opacity: 0.7;
  }
  height: 50px;
  margin-top: 3px;
  display: flex;
  padding: 35px 25px;
  font-size: 1rem;
  align-items: center;
  @media only screen and (max-width: 1200px) {
    padding: 0;
  }
`;

export const UserProfile = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  font-size: 1rem;
  color: var(--color6);
  font-weight: bold;
  @media only screen and (max-width: 1200px) {
    padding: 0;
    font-size: 0.6rem;
    margin-left: 6px;
  }
  flex-direction: column;
  line-height: 0.3;
`;

export const ProfileEntry = styled.p`
  font-size: 0.6rem;
  color: var(--color12);
`;
// -------------------------------------------------------------------
