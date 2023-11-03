/** @format */

import React from "react";
import PropTypes from "prop-types";

export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

Tabs.propTypes = {
  children: PropTypes.string.isRequired,
  buttons: PropTypes.string.isRequired,
  ButtonsContainer: PropTypes.string.isRequired,
};
