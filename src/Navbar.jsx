const Navbar = () => {
  return (
    <nav className="px-8 pt-8 pb-4 border-b-2 border-black">
      <ul className="flex justify-end gap-8 font-bold">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/owner">Owner</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
