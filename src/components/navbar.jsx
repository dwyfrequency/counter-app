import React, { Component } from "react";

/* Note on lifecycle hooks, if you need to use them. You cannot use a stateless function like below.
You will need to use class components */

// destructing the props passed in to just get the total count - must wrap in parans ()
const NavBar = ({ totalCount }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCount}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
