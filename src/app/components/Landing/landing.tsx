import { Box, Typography } from "@mui/material";
import Image from "next/image";

import styles from "./landing.module.css";

const Landing = () => {
 return (
  <Box className={styles.box} id="Strona główna">
   <Box className={styles.landing}>
    <Box>
     <Typography>Cześć, z tej strony</Typography>
     <Typography variant="h1" className={styles.name}>
      Adrian!
     </Typography>
     <Typography>Początkujący programista na Froncie.</Typography>
    </Box>
    <Box className={styles.description}>
     <Typography>
      Mam 20 lat. Front-end&#39;em interesuję się od 2 lat. Szybko się uczę i
      wdrażam do projektów.
     </Typography>
     <Box className={styles.desc_icons}>
      <Typography>Do pisania aplikacji głównie używam</Typography>
      <Image
       src="/reactjs-logo.svg"
       alt="logo ReactJs"
       width={120}
       height={60}
      />
      <Typography style={{ padding: "0 2% 0 1%" }}>oraz</Typography>
      <Image
       className={styles.next_logo}
       src="/next-logo.png"
       alt="logo NextJs"
       width={80}
       height={50}
      />
     </Box>
    </Box>
   </Box>
   <Image src="/portfolio.jpg" alt="Moje zdjęcie" width={400} height={400} />
  </Box>
 );
};

export default Landing;
