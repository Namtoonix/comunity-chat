import { createContext, useState } from "react";

const ThemeContext = createContext();
const ShowOptionContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(true);
  const [showOption, setShowOption] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };
  const toggleShowOption = () => {
    console.log(showOption);
    setShowOption(!showOption);
  };

  const themeData = {
    theme,
    toggleTheme,
  };
  const showOptionData = {
    showOption,
    toggleShowOption,
  };

  return (
    <ThemeContext.Provider value={themeData}>
      <ShowOptionContext.Provider value={showOptionData}>
        {children}
      </ShowOptionContext.Provider>
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ShowOptionContext, ThemeProvider };
