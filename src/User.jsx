import React from "react";
import SectionButton from "./SectionBtn";
const User = ({ employees, sectionBtn }) => {
  return (
    <div className="flex flex-col text-center items-center">
      <h1 className="text-5xl font-bold max-w-[477px] mb-12 ">
        Generation Thailand Home-User Sector
      </h1>
      <SectionButton sectionBtn={sectionBtn} />
      <div className="table-section min-w-[600px] mt-12 border-collapse border-1 border-[#B9B9B9]">
        <table className="flex flex-col">
          <thead className="bg-[#f0f0f0] ">
            <tr className="flex ">
              <th className="flex-1 border border-[#B9B9B9] p-2">Name</th>
              <th className="flex-1 border border-[#B9B9B9] p-2">Last Name</th>
              <th className="flex-1 border border-[#B9B9B9] p-2">Position</th>
            </tr>
          </thead>
          <tbody className="bg-white ">
            {employees.map((employee) => (
              <tr className="flex" key={employee.id}>
                <td className="flex-1 border border-[#B9B9B9]">
                  {employee.name}
                </td>
                <td className="flex-1 border border-[#B9B9B9]">
                  {employee.lastname}
                </td>
                <td className="flex-1 border border-[#B9B9B9]">
                  {employee.position}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
