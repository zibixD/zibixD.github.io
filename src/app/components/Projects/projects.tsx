import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

import styles from "./projects.module.css";

const Projects = () => {
 return (
  <Box className={styles.box} id="Projekty">
   <Typography className="title" sx={{ fontSize: "2.5rem" }}>
    Moje zrealizowane projekty
   </Typography>
   <Box>
    <Box className={styles.box_projects}>
     <Box className={styles.project}>
      <Image
       src="/plasek-site.jpg"
       alt="Strona plasek.pl"
       width={400}
       height={260}
      />
      <Typography className={styles.description}>
       Moja pierwsza oficjalna strona wrzucona do webu. Utworzona na zlecenie
       Biura Rachunkowego.
      </Typography>
      <Box>
       <Box className={styles.tech_icons}>
        <Image
         src="/react-2.svg"
         alt="ikona ReactJS"
         width={50}
         height={50}
         title="ReactJS"
        />
        <Image
         src="/material-ui.svg"
         alt="ikona Material UI"
         width={50}
         height={50}
         title="Material UI"
        />
       </Box>
       <Button
        className={styles.button}
        sx={{ fontSize: "1.3rem", fontWeight: 900 }}
       >
        <a href="https://plasek.pl" target="_blank">
         Sprawdź śmiało!
        </a>
       </Button>
      </Box>
     </Box>
     <Box className={styles.project}>
      <Image
       src="/duraumat-site.jpg"
       alt="Strona duraumat.eu"
       width={400}
       height={260}
      />
      <Typography className={styles.description}>
       Moja pierwsza strona komercyjna. Utworzyłem ją na zlecenie firmy
       Duraumat, która zajmuję się serwisem i wyposażaniem sprzętu rolniczego.
      </Typography>
      <Box>
       <Box className={styles.tech_icons}>
        <Image
         src="/next-js.svg"
         alt="ikona NextJS"
         width={50}
         height={50}
         title="NextJS"
        />
        <Image
         src="/material-ui.svg"
         alt="ikona Material UI"
         width={50}
         height={50}
         title="Material UI"
        />
       </Box>
       <Button
        className={styles.button}
        sx={{ fontSize: "1.3rem", fontWeight: 900 }}
       >
        <a href="https://duraumat.eu" target="_blank">
         Sprawdź śmiało!
        </a>
       </Button>
      </Box>
     </Box>
    </Box>
    <Box className={styles.github}>
     <Image src="/github-logo.png" alt="Logo githuba" width={150} height={60} />
     <Box>
      <Typography className={styles.github_text}>
       Sprawdź moje pozostałe mniejsze projekty na githubie!
      </Typography>
      <Button
       className={styles.github_button}
       sx={{ fontSize: "1.1rem", fontWeight: 900 }}
      >
       <a href="https://github.com/zibixD" target="_blank">
        Zerknij śmiało
       </a>
      </Button>
     </Box>
    </Box>
   </Box>
  </Box>
 );
};

export default Projects;
