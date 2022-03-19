import {
  Header,
  SearchnAvatar,
  Search,
  Avatar,
  SearchLogo,
} from "./styles/styled";
import logo from "./assets/Group368.svg";
import avatar from "./assets/333db814aa02093c1d7287796c88ff58@2x.png";
import searchLogo from "./assets/search.svg";
const Navbar = () => {
  return (
    <Header className="header">
      <a href="/">
        <img role="button" className="logo" src={logo} alt="logo" />
      </a>
      <SearchnAvatar className="row">
        <div className="col-10 d-flex align-items-center search">
          <SearchLogo src={searchLogo} alt="search logo" />
          <Search></Search>
        </div>
        <div className=" col col-2">
          <Avatar src={avatar} alt="profile" />
        </div>
      </SearchnAvatar>
    </Header>
  );
};

export default Navbar;
