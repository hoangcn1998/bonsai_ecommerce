import React from "react";

const DropdownMenu = () => {
  return (
    <div className="dropdownmenu">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Categories 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Categories 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Categories 3
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort By
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Price: low
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Price: hight
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
