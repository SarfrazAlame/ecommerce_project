import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ value, text }) => {
  return (
    <div className="flex">
      <span>
        {value >= 1 ? (
          <AiTwotoneStar />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <AiTwotoneStar />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <AiTwotoneStar />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <AiTwotoneStar />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <AiTwotoneStar />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <AiTwotoneStar />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <AiTwotoneStar />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <AiTwotoneStar />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <AiTwotoneStar />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <AiTwotoneStar />
        )}
      </span>
    </div>
  );
};

export default Rating;
