import React from "react";

const experience = (props) => {

  const eduList = props.experience.map((expObject, igKey) => (
    <tr id={igKey}>
      <td>{expObject.type}</td>
      <td>{expObject.organization}</td>
      <td>{expObject.position}</td>
      <td>{expObject.duration}</td>
    </tr>
  ))

  return (
    <div>
      <table>
        <tr>
          <th>Type</th>
          <th>Oraganization</th>
          <th>Position</th>
          <th>Duration</th>
        </tr>
        {eduList}
      </table>
    </div>
  );
}

export default experience;
