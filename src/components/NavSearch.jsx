import React, { useState } from "react";
import PropTypes from "prop-types";

NavSearch.propTypes = {
  data: PropTypes.object.isRequired,
};

function NavSearch(props) {
  const { data } = props;
  const keySearch = data.keySearch;
  const arrMessageSearch = data.arrMessageSearch;
  const [index, setIndex] = useState(
    arrMessageSearch.length > 1 ? arrMessageSearch.length - 1 : 0
  );
  function handleScroll(num, index, arr) {
    if (index === arr.length - 1 && num === 1) {
      setIndex(0);
    } else if (index === 0 && num === -1) {
      setIndex(arr.length - 1);
    } else {
      setIndex(index + num);
    }

    const element = document.getElementById(`${arr[index].id}`);
    if (!element) return;
    element.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
  }
  return (
    <div className="nav-search">
      <span>
        Result search of "{keySearch}": {arrMessageSearch.length}
      </span>
      <button onClick={() => handleScroll(-1, index, arrMessageSearch)}>
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </button>
      <button onClick={() => handleScroll(1, index, arrMessageSearch)}>
        <i className="fa fa-arrow-down" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default NavSearch;
