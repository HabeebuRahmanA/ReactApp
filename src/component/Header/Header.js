import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Router>
        <Link to="/"> Home </Link> |
        <Link to="/about"> About </Link>
      </Router>
    </header>
  );
}
