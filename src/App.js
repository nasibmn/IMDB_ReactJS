import "./App.css";
import { Container } from "./components/styles/styled";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container className="container-fluid p-0 m-0">
        <div className="row">
          <div className="col col-4">
            <LeftBar />
          </div>
          <div className="col col-5">
            <Feed />
          </div>
          <div className="col col-3">
            <RightBar />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
