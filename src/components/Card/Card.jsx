import React from "react";

function Card({ id, title, thumbnail, duration, isCompleted , description}) {
  return (
    <div className="card">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="details">
        <p>{isCompleted ? "Completed" : "Not Completed"}</p>
        <p>Duration:{duration}</p></div>
    </div>
  );
}

export default Card;
