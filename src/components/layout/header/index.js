import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default () => (
  <header class="navigation fixed-top">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand font-tertiary h3" href="/">
        <div>ABHI</div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse text-center" id="navigation">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">

            <Link to="/" class="nav-link">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="nav-link">About</Link>
          </li>
          {/*<li class="nav-item">*/}
          {/*  <Link to="/blog" class="nav-link">Blog</Link>*/}
          {/*</li>*/}
          <li class="nav-item">
            <Link to="/portfolio" class="nav-link">Portfolio</Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
