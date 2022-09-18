import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Navbar.module.scss";
import ROUTES from "routes";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header className={classes.header}>
      <Link className={classes.logo} to={ROUTES.HOME.url}>
        Portfolio
      </Link>
      <ul className={classes.navbar}>
        {Object.keys(ROUTES).map((nav) => (
          <Link
            key={ROUTES[nav].title}
            to={ROUTES[nav].url}
            className={
              pathname === ROUTES[nav].url
                ? classes.navbar__active
                : classes.navbar__hover
            }
          >
            {ROUTES[nav].title}
          </Link>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
