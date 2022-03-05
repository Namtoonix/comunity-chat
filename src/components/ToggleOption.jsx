import React, { useContext } from "react";
import { ShowOptionContext } from "../ThemeContext";

ToggleOption.propTypes = {};

function ToggleOption(props) {
  const context = useContext(ShowOptionContext);
  return (
    <button onClick={context.toggleShowOption} className="toggle_show_option">
      <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
    </button>
  );
}

export default ToggleOption;
