import {
 Box,
 List,
 ListItemButton,
 ListItemText,
 SwipeableDrawer,
 Typography,
} from "@mui/material";
import { Link } from "react-scroll";
import { useState, Fragment } from "react";

import styles from "./header.module.css";
import { MenuRounded } from "@mui/icons-material";

type Anchor = "top";

const MobileMenu = () => {
 const [state, setState] = useState({
  top: false,
 });

 const toggleDrawer =
  (anchor: Anchor, open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent<SVGSVGElement>) => {
   if (event.type === "keydown" && "key" in event) {
    const keyboardEvent = event as React.KeyboardEvent;
    if (keyboardEvent.key === "Tab" || keyboardEvent.key === "Shift") {
     return;
    }
   }

   if (event.type === "click") {
    const mouseEvent = event as React.MouseEvent<SVGSVGElement>;
    console.log(mouseEvent);
   }

   setState({ ...state, [anchor]: open });
  };

 const list = (anchor: Anchor) => (
  <Box
   className={styles.mobile_box}
   component="div"
   sx={{ width: anchor === "top" ? "100%" : undefined }}
   role="presentation"
   onClick={() => toggleDrawer(anchor, false)}
   onKeyDown={toggleDrawer(anchor, false)}
  >
   <List>
    {["Strona główna", "Technologie", "Moje realizacje", "Kontakt"].map(
     (text) => (
      <Link
       to={text}
       key={text}
       smooth={true}
       href={`/${text}`}
       offset={-20}
       style={{ textDecoration: "none" }}
      >
       <ListItemButton>
        <ListItemText>
         <Typography
          variant="h6"
          sx={{ textDecorationColor: "transparent" }}
          className={styles.mobile_links}
         >
          {text}
         </Typography>
        </ListItemText>
       </ListItemButton>
      </Link>
     )
    )}
   </List>
  </Box>
 );

 return (
  <div className={styles.mobile_menu}>
   {(["top"] as const).map((anchor) => (
    <Fragment key={anchor}>
     <MenuRounded
      onClick={(event) => toggleDrawer(anchor, true)(event)}
      sx={{ color: "white" }}
      fontSize="large"
     />
     <SwipeableDrawer
      anchor={anchor}
      open={state[anchor]}
      onClose={() => toggleDrawer(anchor, false)}
      onOpen={() => toggleDrawer(anchor, true)}
     >
      {list(anchor)}
     </SwipeableDrawer>
    </Fragment>
   ))}
  </div>
 );
};

export default MobileMenu;
