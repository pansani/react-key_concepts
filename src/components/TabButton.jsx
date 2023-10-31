/** @format */

import React from "react";
import PropTypes from "prop-types";

export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

TabButton.propTypes = {
  children: PropTypes.string.isRequired,
  isSelected: PropTypes.string.isRequired,
  onSelect: PropTypes.string.isRequired,
};
