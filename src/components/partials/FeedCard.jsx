import React from "react";
import {
  FeedCardStyle,
  FeedCardInfo,
  FeedCardText,
  FeedImgMore,
  FeedTitle,
  Img,
  Avatar,
  SpanName,
  SpanDate,
  FeedText,
  FeedBg,
  FeedPostInfo,
} from "../styles/styled";
import likelogo from "../assets/arrow-alt-down.svg";
import commentlogo from "../assets/arrow-alt-down-1.svg";
import morelogo from "../assets/ellipsis-h.svg";
import { useSelector } from "react-redux";
import ShowMoreText from "react-show-more-text";
const FeedCard = () => {
  const { payload } = useSelector((state) => state.card);
  console.log(payload ? payload.map((item) => item) : "");
  return (
    <>
      {typeof payload == "object"
        ? payload.map(
            (
              { profile, username, date, title, movie_image, down, up },
              index
            ) => (
              <FeedCardStyle className="p-3" key={index}>
                <div className="card border-0">
                  <FeedPostInfo className="row">
                    <div className="col-lg-1">
                      <Avatar src={profile} alt="profile" />
                    </div>
                    <div className="col-lg-6">
                      <SpanName>{username}</SpanName>
                      <SpanDate className="ps-2">{date}</SpanDate>
                    </div>
                    <div className="col-lg-5 pe-4 text-end">
                      <FeedImgMore src={morelogo} alt="more" />
                    </div>
                  </FeedPostInfo>
                  <div className="card-body">
                    <FeedTitle className="card-text">
                      {/* <FeedText> */}
                      <ShowMoreText
                        lines={3}
                        anchorClass="my-anchor-css-class"
                        more="daha fazla"
                        less="daha az"
                      >
                        {title}
                      </ShowMoreText>
                      {/* </FeedText> */}
                      {movie_image ? (
                        <FeedBg className="img-fluid" src={movie_image} />
                      ) : (
                        ""
                      )}
                    </FeedTitle>
                    <FeedCardInfo>
                      <FeedCardText>Reply</FeedCardText>
                      <FeedCardText>
                        <Img
                          className="pe-1 img-fluid"
                          src={likelogo}
                          alt="like"
                        />
                        {down}
                      </FeedCardText>

                      <FeedCardText>
                        <Img
                          className="pe-1 img-fluid"
                          src={commentlogo}
                          alt="comment logo"
                        />
                        {up}
                      </FeedCardText>
                    </FeedCardInfo>
                  </div>
                </div>
              </FeedCardStyle>
            )
          )
        : payload}
    </>
  );
};

export default FeedCard;
