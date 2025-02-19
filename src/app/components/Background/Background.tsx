"use client";

import { useEffect } from "react";

import "./Background.css";

const Background = () => {
 const generateShadows = (n: number) => {
  let value = "";
  for (let i = 0; i < n; i++) {
   const x = Math.floor(Math.random() * 2000);
   const y = Math.floor(Math.random() * 2000);
   value += `${x}px ${y}px #FFF, `;
  }
  return value.slice(0, -2);
 };

 useEffect(() => {
  const stars = document.getElementById("stars");
  const stars2 = document.getElementById("stars2");
  const stars3 = document.getElementById("stars3");

  if (stars && stars2 && stars3) {
   stars.style.boxShadow = generateShadows(700);
   stars2.style.boxShadow = generateShadows(200);
   stars3.style.boxShadow = generateShadows(100);
  }
 }, []);
 return (
  <>
   <div id="stars"></div>
   <div id="stars2"></div>
   <div id="stars3"></div>
  </>
 );
};

export default Background;
