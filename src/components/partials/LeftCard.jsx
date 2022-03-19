import React from "react";
import {
  Card,
  CardInfo,
  CardText,
  ImgMore,
  Title,
  Img,
} from "../styles/styled";
import { populer } from "../object/Objects";
import likelogo from "../assets/arrow-alt-down.svg";
import commentlogo from "../assets/arrow-alt-down-1.svg";
import sharelogo from "../assets/comment-alt-dots.svg";
import morelogo from "../assets/ellipsis-h.svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCard, initialValue } from "../redux/actions";

const LeftCard = ({ active }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    function parseDate(str) {
      var tokens = str.split(/\D/);
      while (tokens.length < 5) tokens.push(0);

      return new Date(
        tokens[2],
        tokens[1] - 1,
        tokens[0],
        tokens[3] || 0,
        tokens[4] || 0
      );
    }
    if (active) {
      return populer.sort((a, b) => a.id - b.id);
    } else {
      populer.sort(function (a, b) {
        return parseDate(b.date) - parseDate(a.date);
      });
    }
  }, [active]);
  return (
    <>
      {populer.map(({ id, innerpost, title, down, up, comment, date }) => (
        <Card
          key={id}
          id={id}
          onLoad={(e) => {
            e.preventDefault();
            e.currentTarget.id == 1 && dispatch(initialValue(innerpost));
          }}
          onClick={(e) => {
            e.preventDefault();
            dispatch(getCard(innerpost));
          }}
        >
          <div className="card border-0">
            <div className="card-body">
              <Title className="card-text">
                <ImgMore src={morelogo} alt="more" />
                <p>{title}</p>
              </Title>
              <CardInfo>
                <CardText>
                  <Img className="pe-1 img-fluid" src={likelogo} alt="like" />
                  {down}
                </CardText>

                <CardText>
                  <Img
                    className="pe-1 img-fluid"
                    src={commentlogo}
                    alt="comment logo"
                  />
                  {up}
                </CardText>

                <CardText>
                  <Img
                    className="pe-1 img-fluid"
                    src={sharelogo}
                    alt="share logo"
                  />
                  {comment}
                </CardText>

                <CardText>{date}</CardText>
              </CardInfo>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default LeftCard;
