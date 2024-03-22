import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/orders">Orders</Link>
          {/* <a href="/orders">Orders</a> */}
        </li>
        <li>
          <Link to="/profile">Profile</Link>
          {/* <a href="/profile">Profile</a> */}
        </li>
      </ul>
    </div>
  );
}
