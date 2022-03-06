import { createContext, useState } from "react";

const ThemeContext = createContext();
const ShowOptionContext = createContext();
const SearchContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(true);
  const [showOption, setShowOption] = useState(false);
  const [keySearch, setKeySearch] = useState("");

  const toggleTheme = () => {
    setTheme(!theme);
  };
  const toggleShowOption = () => {
    setShowOption(!showOption);
  };
  const submitKeySearch = (keyData) => {
    setKeySearch(keyData);
  };

  const themeData = {
    theme,
    toggleTheme,
  };
  const showOptionData = {
    showOption,
    toggleShowOption,
  };
  const searchData = {
    keySearch,
    submitKeySearch,
  };

  return (
    <ThemeContext.Provider value={themeData}>
      <ShowOptionContext.Provider value={showOptionData}>
        <SearchContext.Provider value={searchData}>
          {children}
        </SearchContext.Provider>
      </ShowOptionContext.Provider>
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ShowOptionContext, SearchContext, ThemeProvider };
