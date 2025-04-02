import { Box, Typography } from "@mui/material";
import ContactForm from "./form";
import Socials from "./socials";

import styles from "./contact.module.css";

const Contact = () => {
 return (
  <Box className={styles.box_contact} id="Kontakt">
   <Typography className="title" sx={{ fontSize: "2.5rem" }}>
    Porozmawiajmy
   </Typography>
   <Box className={styles.contacts_methods}>
    <Box className={styles.sections}>
     <Typography
      className={styles.main_text}
      sx={{ fontSize: "1.5rem", margin: "0 auto" }}
     >
      Napisz email poprzez formularz
     </Typography>
     <ContactForm />
    </Box>
    <Typography
     className={`${styles.main_text} ${styles.or}`}
     sx={{ fontSize: "1.5rem" }}
    >
     albo
    </Typography>
    <Box className={styles.sections}>
     <Typography
      className={styles.main_text}
      sx={{ fontSize: "1.5rem", margin: "0 auto" }}
     >
      skontaktujmy się inaczej!
     </Typography>
     <Socials />
    </Box>
   </Box>
  </Box>
 );
};

export default Contact;
