"use client";

import { Box } from "@mui/material";
import { Link } from "react-scroll";

import styles from "./header.module.css";

const Menu = () => {
 return (
  <Box className={styles.menu}>
   <Link className={styles.links} to="">
    Strona główna
   </Link>
   <Link className={styles.links} to="">
    Technologie
   </Link>
   <Link className={styles.links} to="">
    Moje rezalizacje
   </Link>
   <Link className={styles.links} to="">
    Kontakt
   </Link>
  </Box>
 );
};

export default Menu;
