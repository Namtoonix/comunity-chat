import React, { useContext, useState } from "react";
import { SearchContext } from "../ThemeContext";

SearchMessage.propTypes = {};

function SearchMessage(props) {
  const context = useContext(SearchContext);
  const [keyWorld, setKeyWorld] = useState("");

  const handleSubmit = (keyWorld) => {
    context.submitKeySearch(keyWorld);
  };
  const handleOnchange = (data) => {
    setKeyWorld(data);
  };

  return (
    <form
      id="form-search"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(keyWorld);
      }}
      className="search-form"
    >
      <input
        onChange={(e) => handleOnchange(e.target.value)}
        className="search-input"
        placeholder="Search in message"
        type="text"
        value={keyWorld}
      />
      <input type="submit" id="submit-form" className="hidden" />
      <label htmlFor="submit-form">
        <i className="fa fa-search" aria-hidden="true"></i>
      </label>
    </form>
  );
}

export default SearchMessage;
