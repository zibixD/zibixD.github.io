import { Box, Typography } from "@mui/material";
import ContactForm from "./form";
import Socials from "./socials";

import styles from "./contact.module.css";

const Contact = () => {
 return (
  <Box className={styles.box_contact} id="Kontakt">
   <Typography className="title">Porozmawiajmy</Typography>
   <Box className={styles.contacts_methods}>
    <Box>
     <Typography className={styles.main_text}>
      Napisz email poprzez formularz
     </Typography>
     <ContactForm />
    </Box>
    <Typography className={`${styles.main_text} ${styles.or}`}>albo</Typography>
    <Box>
     <Typography className={styles.main_text}>
      skontaktujmy się inaczej!
     </Typography>
     <Socials />
    </Box>
   </Box>
  </Box>
 );
};

export default Contact;
