import { Box, Typography } from "@mui/material";
import Image from "next/image";

import styles from "./contact.module.css";

const Socials = () => {
 return (
  <Box sx={{ height: 400 }}>
   <Box className={styles.socials}>
    <Image
     src="/instagram-icon.svg"
     alt="Logo instagrama"
     width={50}
     height={50}
    />
    <Typography>to_ja_rvdy</Typography>
   </Box>
   <Box className={styles.socials}>
    <Image
     src="/facebook-icon.svg"
     alt="Logo facebooka"
     width={50}
     height={50}
    ></Image>
    <Typography>Adrian Pląsek</Typography>
   </Box>
   <Box className={styles.socials}>
    <Image src="/gmail.png" alt="Logo emaila" width={50} height={50}></Image>
    <a href="mailto:adrianplasek@wp.pl">Adrianplasek@wp.pl</a>
   </Box>
   <Box className={styles.socials}>
    <Image src="/phone.png" alt="Logo telefonu" width={50} height={50}></Image>
    <a href="tel:48696882721">Mój numer</a>
   </Box>
  </Box>
 );
};

export default Socials;
