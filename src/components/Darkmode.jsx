import React, {  useEffect, useState } from 'react'
import './Darkmode.css'
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";


const Darkmode = () =>
{
  function getDefaultMode() {
    const savedMode = localStorage.getItem("theme");
    return savedMode ? savedMode : "light";
  }

  const [theme, setTheme] = useState(getDefaultMode());

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
      <button onClick={toggleTheme}>
        {theme === "light" ? (
          <div className="Moon">
            <BsFillMoonFill />
          </div>
        ) : (
          <div className="Sun">
            <BsFillSunFill />
          </div>
        )}
      </button>
  );
};

export default Darkmode

