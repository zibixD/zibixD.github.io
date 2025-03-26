import {
 AlternateEmail,
 Facebook,
 Instagram,
 LocalPhone,
} from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

import styles from "./mobileButton.module.css";

const actions = [
 {
  icon: <Instagram />,
  name: "Instagram",
  link: "https://www.instagram.com/to_ja_rvdy/",
 },
 {
  icon: <Facebook />,
  name: "Facebook",
  link: "https://www.facebook.com/adrian.plasek.5",
 },
 { icon: <LocalPhone />, name: "Telefon", link: "tel:48696882721" },
 { icon: <AlternateEmail />, name: "Email", link: "mailto:adrianplasek@wp.pl" },
];

const MobileButton = () => {
 return (
  <SpeedDial
   className={styles.mobileButton}
   ariaLabel="Kontakt"
   icon={<SpeedDialIcon />}
  >
   {actions.map((action) => (
    <a
     key={action.name}
     href={action.link}
     target="_blank"
     style={{ textDecoration: "none", color: "inherit" }}
    >
     <SpeedDialAction
      tooltipTitle={action.name}
      icon={action.icon}
     ></SpeedDialAction>
    </a>
   ))}
  </SpeedDial>
 );
};

export default MobileButton;
