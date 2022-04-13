import React from "react";
import { Link } from "react-router-dom";

function FeedNav(props) {
  return (
    <nav className="feed-nav">
      <ul className="flex">
        <li className="feed-nav-item">
          <Link className="active" to="/">
            Global Feed
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FeedNav;
