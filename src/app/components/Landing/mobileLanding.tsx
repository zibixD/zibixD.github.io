import { Box, Typography } from "@mui/material";
import Image from "next/image";

import styles from "./mobileLanding.module.css";

const MobileLanding = () => {
 return (
  <Box id="Strona główna" className={styles.mobile_box}>
   <Typography>Cześć, z tej strony</Typography>
   <Typography variant="h1">Adrian!</Typography>
   <Typography>Początkujący programista na Froncie.</Typography>
   <Image src="/portfolio.jpg" alt="Moje zdjecie" width={200} height={200} />
   <Box className={styles.mobile_description}>
    <Typography>
     Mam 20 lat. Front-end&#39;em interesuję się od 2 lat. Szybko się uczę i
     wdrażam do projektów.
    </Typography>
    <Typography className={styles.mobile_desc_icons}>
     Do pisania aplikacji głównie używam
     <Image
      src="/reactjs-logo.svg"
      alt="logo ReactJs"
      width={90}
      height={40}
     />{" "}
     oraz
     <Image
      src="/next-logo.png"
      alt="logo NextJs"
      width={60}
      height={30}
     ></Image>
    </Typography>
   </Box>
  </Box>
 );
};

export default MobileLanding;
