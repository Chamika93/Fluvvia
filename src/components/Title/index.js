import React from "react";

const Title = ({ title, style }) => {
  return (
    <div className="section-title" style={{ ...style }}>
      <h4>{title}</h4>
      <div />
    </div>
  );
};

export default Title;
