import React from "react";

const Train = (props) => {
    const trainName = props.name;
    const trainNumber = props.number;
    const duration = {
        hours: props.hours,
        minutes: props.minutes,
        second: props.second
    }
    const type = props.type;
    const seats = props.seat;
    const price = props.price;
    const delayed = props.delayed;
  return (
    <div>
      <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">{trainName}</h5>
          <p className="card-text">
            {trainNumber}
          </p>
          <p className="card-text">
            {`${duration.hours}HR:${duration.minutes}MIN:${duration.second}SEC`}
          </p>
          <p className="card-text">
            {`Type: ${type}`}
            {`Price: ${price}`}
            {`Delayed By: ${delayed}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Train;