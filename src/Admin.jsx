import React, { useState } from "react";
import SectionButton from "./SectionBtn";
const Admin = ({ employees, sectionBtn, handleEmployees }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const handleSave = () => {
    if (name && lastname && position) {
      const id =
        employees.length > 0 ? employees[employees.length - 1].id + 1 : 0;
      const newEmployee = {
        id,
        name,
        lastname,
        position,
      };
      const updatedEmployees = [...employees, newEmployee];
      handleEmployees(updatedEmployees);
    } else {
      alert("Please fill in all fields before saving.");
    }
  };
  const handleDelete = (deleteEmployee) => {
    const filterEmployees = employees.filter(
      (employee, index) => index !== deleteEmployee
    );
    handleEmployees(filterEmployees);
  };
  return (
    <>
      <h1>Generation Thailand</h1>
      <h2>Home - Admin Sector</h2>
      <SectionButton sectionBtn={sectionBtn} />
      <h3>Create User Here</h3>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Position"
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
        <button onClick={handleSave}>Save</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Postition</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
              <td>
                <button value={index} onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Admin;
