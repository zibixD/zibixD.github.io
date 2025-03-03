"use client";

import { useEffect, useState } from "react";
import Background from "./components/Background/background";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Landing from "./components/Landing/landing";
import MobileLanding from "./components/Landing/mobileLanding";
import Projects from "./components/Projects/projects";
import Technologies from "./components/Technologies/technologies";
import { Box, Fab } from "@mui/material";
import Image from "next/image";

import styles from "./page.module.css";
import { useIsMobile } from "./hooks/useMobile";

export default function Home() {
 const [showButton, setShowButton] = useState(false);

 const isMobile = useIsMobile();

 useEffect(() => {
  window.addEventListener("scroll", () => {
   if (window.scrollY > 100) {
    setShowButton(true);
   } else {
    setShowButton(false);
   }
  });
 }, []);

 const scrollToTopHandler = () => {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 };
 return (
  <>
   <Box>
    <Background />
    <Header />
    {isMobile ? <MobileLanding /> : <Landing />}
    {/* <Languages username="zibixD" /> */}
    <Technologies />
    <Projects />
    {/* <Contact /> */}
    {/* <Footer /> */}
   </Box>
   {showButton && (
    <Fab onClick={scrollToTopHandler} className={styles.scrollBtn}>
     <Image
      src="/rocket.png"
      alt="Powrót do góry strony"
      height={50}
      width={50}
     />
    </Fab>
   )}
  </>
 );
}
