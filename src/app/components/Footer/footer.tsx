import { Box, Typography } from "@mui/material";

import styles from "./footer.module.css";

const Footer = () => {
 return (
  <Box className={styles.box}>
   <Typography>Adrian Pląsek</Typography>
   <Box className={styles.contact}>
    <a href="mailto:adrianplasek@wp.pl">Adrianplasek@wp.pl</a>
    <a href="tel::48696882721">+48 696 882 721</a>
   </Box>
  </Box>
 );
};

export default Footer;
