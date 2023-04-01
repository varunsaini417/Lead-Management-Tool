import React from "react";

import journeyData from "../Journey-Card/JourneyCarddata";
const JourneyCard = () => {
  return journeyData.map((details) => (
    <div className="col-lg-4 mt-5">
      <div className="card-deck ">
        <div className="card shadow p-3 mb-5 bg-white rounded">
          <div className="  h3 ">{details.tittle}</div>
          <div className="mt-5 h3">{details.tittle2}</div>
          <p className="mt-5">{details.parah}</p>
        </div>
      </div>
    </div>
  ));
};

export default JourneyCard;
