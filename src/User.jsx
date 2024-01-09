import React from "react";
import SectionButton from "./SectionBtn";
const User = ({ employees, sectionBtn }) => {
  return (
    <>
      <h1>Generation Thailand</h1>
      <h2>Home - User Sector</h2>
      <SectionButton sectionBtn={sectionBtn} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default User;
