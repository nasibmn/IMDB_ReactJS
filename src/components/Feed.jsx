import { FeedStyle, ReplyInput, ImgInput } from "./styles/styled";
import FeedCard from "./partials/FeedCard";
import inputLogo from "./assets/arrows.svg";

const Feed = () => {
  return (
    <FeedStyle className="feed">
      <FeedCard />
      <div className="position-relative">
        <ImgInput src={inputLogo} alt="send" />
        <ReplyInput
          placeholder="Reply to this thread.."
          className="form-control shadow-none"
        />
      </div>
    </FeedStyle>
  );
};

export default Feed;
