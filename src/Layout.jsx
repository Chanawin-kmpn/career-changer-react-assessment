import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container-none flex flex-col bg-[#e8e8e8] ">
      <Navbar />
      <main className="flex flex-col items-center p-12">{children}</main>
    </div>
  );
};

export default Layout;
