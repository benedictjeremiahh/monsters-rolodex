import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ handleChange, value, placeholder, name }) => (
  <input
    className="search"
    name={name}
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
    value={value}
  />
);
