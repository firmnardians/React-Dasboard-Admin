import React from "react";
import "./DetailTransactions.css";

const DetailTransactions = props => {
  return (
    <>
      <div className={`card-count-data ${props.className}`}>
        <h3 className="text-center">{props.title}</h3>
        <div className="card-number-data text-center">{props.number}</div>
      </div>
    </>
  );
};

export default DetailTransactions;
