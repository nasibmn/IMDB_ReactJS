import { RightBarStyle } from "./styles/styled";
import RightCard from "./partials/RightCard";

const RightBar = () => {
  return (
    <RightBarStyle className="rightBar">
      <RightCard />
    </RightBarStyle>
  );
};

export default RightBar;
