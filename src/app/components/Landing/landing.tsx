import { Box, Typography } from "@mui/material";
import Image from "next/image";

import styles from "./landing.module.css";

const Landing = () => {
 return (
  <Box className={styles.box}>
   <Box className={styles.landing}>
    <Box>
     <Typography>Cześć, z tej strony</Typography>
     <Typography variant="h1" className={styles.name}>
      Adrian!
     </Typography>
     <Typography>Początkujący programista na Froncie</Typography>
    </Box>
    <Box className={styles.description}>
     <Typography>
      Mam 20 lat. Front-end&#39;em interesuję się od 2 lat. Szybko się uczę i
      wdrażam do projektów.{" "}
     </Typography>
     <Typography className={styles.desc_icons}>
      Do pisania aplikacji głównie używam
      <Image
       src="/react-logo.png"
       alt="logo ReactJs"
       width={120}
       height={60}
      />{" "}
      oraz
      <Image
       src="/next-logo.png"
       alt="logo NextJs"
       width={70}
       height={40}
      ></Image>
     </Typography>
    </Box>
   </Box>
   <Image src="/landing-smile.jpg" alt="" width={400} height={400} />
  </Box>
 );
};

export default Landing;
