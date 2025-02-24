"use client";

import { Box } from "@mui/material";
import { Link } from "react-scroll";

import styles from "./header.module.css";

const Menu = () => {
 return (
  <Box className={styles.menu}>
   <Link
    className={styles.links}
    to="Strona główna"
    href="Strona główna"
    smooth={true}
    offset={-100}
   >
    Strona główna
   </Link>
   <Link
    className={styles.links}
    to="Technologie"
    href="Technologie"
    smooth={true}
   >
    Technologie
   </Link>
   <Link className={styles.links} to="Projekty" href="Projekty" smooth={true}>
    Moje rezalizacje
   </Link>
   <Link className={styles.links} to="Kontakt" href="Kontakt" smooth={true}>
    Kontakt
   </Link>
  </Box>
 );
};

export default Menu;
