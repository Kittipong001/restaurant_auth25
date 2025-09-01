import React from "react";

const Drop = () => {
  return (
    <div className="inline-grid *:[grid-area:1/1]">
      <div className="status status-error animate-ping"></div>
      <div className="status status-info"></div>
    </div>
  );
};

export default Drop;
