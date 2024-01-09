const SectionButton = ({ sectionBtn }) => {
  return (
    <>
      <button value="user" onClick={(event) => sectionBtn(event)}>
        User Home Sector
      </button>
      <button value="admin" onClick={(event) => sectionBtn(event)}>
        Admin Home Sector
      </button>
    </>
  );
};

export default SectionButton;
