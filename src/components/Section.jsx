/** @format */

import React from "react";
import PropTypes from "prop-types";

export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  props: PropTypes.string.isRequired,
};
