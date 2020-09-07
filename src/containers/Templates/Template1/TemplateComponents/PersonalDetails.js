import React from "react";

const personalDetails = (props) => {
  return (
    <div>
      <div>Contact : {props.number}</div>
      <div>Email : {props.mail}</div>
      <div>Address : {props.city + ", " + props.state + "-" + props.pin}</div>
    </div>
  );
}

export default personalDetails;
