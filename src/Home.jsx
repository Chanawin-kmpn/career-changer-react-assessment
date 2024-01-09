import { useEffect, useState } from "react";
import Layout from "./Layout";
import Admin from "./Admin";
import User from "./User";
import SectionButton from "./SectionBtn";
const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [sector, setSector] = useState("other");
  const [employees, setEmployees] = useState(mockEmployees);

  const handleEmployees = (newEmployee) => {
    setEmployees(newEmployee);
  };
  useEffect(() => console.log(employees), [employees]);
  const handleSection = (event) => {
    setSector(event.target.value);
  };
  return (
    <Layout>
      {sector === "admin" ? (
        <Admin
          employees={employees}
          sectionBtn={handleSection}
          handleEmployees={handleEmployees}
        />
      ) : sector === "user" ? (
        <User employees={employees} sectionBtn={handleSection} />
      ) : (
        <>
          <h1>Generation Thailand</h1>
          <h2>React-Assessment</h2>
          <SectionButton sectionBtn={handleSection} />
        </>
      )}
    </Layout>
  );
};

export default Home;
