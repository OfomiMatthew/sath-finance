import Link from "next/link";
import React from "react";
import Links from "./links/Links";
import NavLinks from "./links/Links";
import styles from './navbar.module.css' // better way to import a component css


const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>Sath Finance</Link>
      <div>
      <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
