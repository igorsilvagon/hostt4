import React from 'react';
import { Link } from "react-scroll";

export const SmoothScrollLink = ({ to, children }) => (
  <Link
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={0}
    duration= {500}
  >
    { children }
  </Link>
);
