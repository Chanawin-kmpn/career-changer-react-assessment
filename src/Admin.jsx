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
    <div className="flex flex-col text-center items-center">
      <h1 className="text-5xl font-bold max-w-[477px] mb-12 mx-auto">
        Generation Thailand Home-Admin Sector
      </h1>
      <SectionButton sectionBtn={sectionBtn} />
      <h3 className="font-bold text-xl self-start mt-12 mb-4">
        Create User Here
      </h3>
      <div className="flex gap-12 mb-24">
        <input
          className="w-[300px] px-4 py-2 rounded"
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="w-[300px] px-4 py-2 rounded"
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <input
          className="w-[300px] px-4 py-2 rounded"
          type="text"
          placeholder="Position"
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
        <button
          className="text-white bg-[#5E5BFF] rounded px-4 py-2"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div className="table-section table-section min-w-[600px] mt-12 border-collapse border-1 border-[#B9B9B9]">
        <table className="flex flex-col min-w-[800px]">
          <thead className="flex flex-col bg-[#f0f0f0] ">
            <tr className="flex">
              <th className="flex-1 border border-[#B9B9B9] p-2">Name</th>
              <th className="flex-1 border border-[#B9B9B9] p-2">Last Name</th>
              <th className="flex-1 border border-[#B9B9B9] p-2">Postition</th>
              <th className="flex-1 border border-[#B9B9B9] p-2">Action</th>
            </tr>
          </thead>
          <tbody className="flex flex-col bg-white">
            {employees.map((employee, index) => (
              <tr className="flex" key={index}>
                <td className="flex-1 border border-[#B9B9B9] p-2">
                  {employee.name}
                </td>
                <td className="flex-1 border border-[#B9B9B9] p-2">
                  {employee.lastname}
                </td>
                <td className="flex-1 border border-[#B9B9B9] p-2">
                  {employee.position}
                </td>
                <td className="flex-1 border border-[#B9B9B9] p-2">
                  <button
                    className="text-red-600 font-bold"
                    value={index}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
