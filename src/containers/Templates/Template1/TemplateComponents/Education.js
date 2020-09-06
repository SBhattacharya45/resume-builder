import React from "react";

function education(props) {

  const eduList = props.education.map((eduObject, igKey) => (
    <tr>
      <td>{eduObject.qualification}</td>
      <td>{eduObject.field}</td>
      <td>{eduObject.institute}</td>
      <td>{eduObject.passout}</td>
      <td>{eduObject.grade}</td>
    </tr>
  ))

  return (
    <div>
      <table>
        <tr>
          <th>Qualifications</th>
          <th>Field</th>
          <th>Institute</th>
          <th>Passout</th>
          <th>Grade</th>
        </tr>
        {eduList}
      </table>
    </div>
  );
}

export default education;
