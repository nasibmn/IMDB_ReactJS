import { LeftBarStyle, LeftTitle, Hr } from "./styles/styled";
import LeftCard from "./partials/LeftCard";
import { useState } from "react";

const LeftBar = () => {
  const [active, setActive] = useState(false);

  return (
    <LeftBarStyle className="leftBar">
      <div className="row w-100">
        <LeftTitle className="col col-6" onClick={() => setActive(false)}>
          Popular
          {active ? (
            <Hr className="d-none"></Hr>
          ) : (
            <Hr className="d-block"></Hr>
          )}
        </LeftTitle>
        <LeftTitle className="col col-6" onClick={() => setActive(true)}>
          Recents
          {active ? (
            <Hr className="d-block"></Hr>
          ) : (
            <Hr className="d-none"></Hr>
          )}
        </LeftTitle>
        {active ? <LeftCard active={active} /> : <LeftCard active={active} />}
      </div>
    </LeftBarStyle>
  );
};

export default LeftBar;
