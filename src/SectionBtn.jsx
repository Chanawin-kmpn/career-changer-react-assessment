const SectionButton = ({ sectionBtn }) => {
  return (
    <div className=" flex justify-between gap-[180px]">
      <button
        className="font-bold bg-white p-4 rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        value="user"
        onClick={(event) => sectionBtn(event)}
      >
        User Home Sector
      </button>
      <button
        className="font-bold bg-white p-4 rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        value="admin"
        onClick={(event) => sectionBtn(event)}
      >
        Admin Home Sector
      </button>
    </div>
  );
};

export default SectionButton;
