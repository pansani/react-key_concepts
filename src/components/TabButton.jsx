/** @format */

import React from "react";
import PropTypes from "prop-types";

export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
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
