import React from "react";

export default function ToggleCard({ handleClick, select }) {
    return (
      <span role="button"
        className="btn"
        style={{ color: `${select ? "red" : "white"}` }}
        onClick={handleClick} >
      </span>
    )
  }
