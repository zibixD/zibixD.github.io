"use client";

import { Box } from "@mui/material";
import { Link } from "react-scroll";

import styles from "./header.module.css";
import { useEffect, useState } from "react";

const Menu = () => {
 const [isScrolling, setIsScrolling] = useState(true);

 useEffect(() => {
  window.addEventListener("scroll", scrollHandler);
  return () => window.removeEventListener("scroll", scrollHandler);
 }, []);

 const scrollHandler = () => {
  if (window.scrollY > 150) {
   setIsScrolling(true);
  } else {
   setIsScrolling(false);
  }
 };

 return (
  <Box className={isScrolling ? `${styles.menu_scroll}` : `${styles.menu}`}>
   <Link
    className={styles.links}
    to="Strona główna"
    href="/#Strona główna"
    smooth={true}
    offset={-100}
   >
    Strona główna
   </Link>
   <Link
    className={styles.links}
    to="Technologie"
    href="/#Technologie"
    smooth={true}
    offset={-80}
   >
    Technologie
   </Link>
   <Link
    className={styles.links}
    to="Projekty"
    href="/#Projekty"
    smooth={true}
    offset={-80}
   >
    Moje rezalizacje
   </Link>
   <Link
    className={styles.links}
    to="Kontakt"
    href="/#Kontakt"
    smooth={true}
    offset={-80}
   >
    Kontakt
   </Link>
  </Box>
 );
};

export default Menu;
