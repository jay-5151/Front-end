import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <header className={dark ? "dark" : ""}>
      <h1>User Management Dashboard</h1>
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;