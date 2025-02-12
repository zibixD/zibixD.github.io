import { Box, Typography } from "@mui/material";
import Image from "next/image";

import styles from "./technologies.module.css";

const Technologies = () => {
 return (
  <Box className={styles.box}>
   <Typography className="title">
    {/* Co używam do projektów */}
    To już znam!
   </Typography>
   <Box className={styles.logos_box}>
    <Image
     className={styles.logos}
     src="/javascript.svg"
     alt="logo JavaScript"
     width={80}
     height={80}
    />
    <Image src="/typescript.svg" alt="logo TypeScript" width={80} height={80} />
    <Image src="/react-2.svg" alt="logo ReactJS" width={80} height={80} />
    <Image src="/redux.svg" alt="logo Redux" width={80} height={80} />
    <Image src="/next-js.svg" alt="logo Next" width={80} height={80} />
    <Image src="/material-ui.svg" alt="logo Next" width={80} height={80} />
   </Box>
  </Box>
 );
};

export default Technologies;
