import React from "react";
import "bulma/css/bulma.css";
import "./Navbar.css";
import { MyButtons } from "../coolbutton/CoolButton";

function MyNavbar() {
  let login = "Login";
  let signup = "Signup";
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <div
          className="navbar-burger"
          data-target="navbarExampleTransparentExample"
        ></div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            Home
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <MyButtons name={login} className="button is-dark" />

              <MyButtons name={signup} className="button is-light" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { MyNavbar };
