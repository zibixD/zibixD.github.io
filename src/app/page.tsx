"use client";

import { useEffect, useState } from "react";
import Background from "./components/Background/background";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Landing from "./components/Landing/landing";
import Projects from "./components/Projects/projects";
import Technologies from "./components/Technologies/technologies";
import { Box, Fab } from "@mui/material";
import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
 const [showButton, setShowButton] = useState(false);

 useEffect(() => {
  window.addEventListener("scroll", () => {
   if (window.scrollY > 100) {
    setShowButton(true);
    console.log(showButton);
   } else {
    setShowButton(false);
    console.log(showButton);
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
    <Landing />
    {/* <Languages username="zibixD" /> */}
    <Technologies />
    <Projects />
    <Contact />
    <Footer />
   </Box>
   {showButton && (
    <Fab onClick={scrollToTopHandler} className={styles.scrollBtn}>
     <Image
      src="/rocket.png"
      alt="Powrót do góry strony"
      height={60}
      width={60}
     />
    </Fab>
   )}
  </>
 );
}
