import React from "react";
import "./DashboardCard.style.scss";

const DashboardCard = (props) => {
  return (
    <>
      <div className="card rounded d-flex justify-content-between flex-row" style={{width: "48%" }}>
        <div className="container my-1">
          <p>{props.title}</p>
          <h5 className="font-weight-bold">
            {props.body}
          </h5>
        </div>
        <i className={`fa ${props.icon} fa-4x float-right`} style={{ width: "20%" , color: props.color}} />
      </div>
    </>
  );
};

export default DashboardCard;
