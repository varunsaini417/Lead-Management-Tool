import React from "react";
import data from "./cardsData";
// import parallex from "../../Effects/Parallex/parallex";
const Cards = () => {
  return (
    <>
      <div className="row  d-flex justify-content-around p-sm-3 mb-5" >
      <h1 className="text-center">Learn what we can do for you?</h1>
        {data.map((detail) => {
          return (
            <div className="col-lg-4 mt-5" >
              <div className="card-deck ">
                <img className="img-fluid " src={detail.src} alt="" />
                <div className="card shadow p-3 mb-5 bg-white rounded">
                  <h2>{detail.tittle}</h2>
                  <p className="mt-5" > {detail.parah}</p>
                </div>
              </div>
            </div>
          );
        })}

       
      </div>
    </>
  );
};

export default Cards;
