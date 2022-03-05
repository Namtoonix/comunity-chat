import { Switch } from "antd";
import React, { useContext, useState } from "react";
import "../../node_modules/antd/dist/antd.css";
import { ThemeContext } from "../ThemeContext";

ToggleTheme.propTypes = {};

function ToggleTheme(props) {
  const context = useContext(ThemeContext);

  return (
    <div
      style={{
        position: "fixed",
        left: "10px",
        bottom: "10px",
        zIndex: "1",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Switch defaultChecked onChange={context.toggleTheme} />
      <span style={{ marginLeft: "4px" }}>Dark Mode</span>
    </div>
  );
}

export default ToggleTheme;
