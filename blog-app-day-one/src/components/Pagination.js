import React from "react";
// import { Link } from "react-router-dom";

function Pagination(props) {
  return (
    <div className="flex justify-center item-center pagination wrap">
      <div className="prev">
        <p>Prev</p>
      </div>
      <div className="pagination-count">
        <span>1</span>
      </div>
      <div className="next">
        <p>Next</p>
      </div>
    </div>
  );
}

export default Pagination;
