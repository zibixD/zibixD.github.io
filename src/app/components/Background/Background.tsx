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
  const starsDuplicate = document.getElementById("stars-duplicate");
  const stars2 = document.getElementById("stars2");
  const stars2Duplicate = document.getElementById("stars2-duplicate");
  const stars3 = document.getElementById("stars3");
  const stars3Duplicate = document.getElementById("stars3-duplicate");

  if (
   stars &&
   starsDuplicate &&
   stars2 &&
   stars2Duplicate &&
   stars3 &&
   stars3Duplicate
  ) {
   const smallShadows = generateShadows(700);
   const mediumShadows = generateShadows(200);
   const bigShadows = generateShadows(100);

   stars.style.boxShadow = smallShadows;
   starsDuplicate.style.boxShadow = smallShadows;

   stars2.style.boxShadow = mediumShadows;
   stars2Duplicate.style.boxShadow = mediumShadows;

   stars3.style.boxShadow = bigShadows;
   stars3Duplicate.style.boxShadow = bigShadows;
  }
 }, []);
 return (
  <>
   <div id="stars"></div>
   <div id="stars-duplicate"></div>
   <div id="stars2"></div>
   <div id="stars2-duplicate"></div>
   <div id="stars3"></div>
   <div id="stars3-duplicate"></div>
  </>
 );
};

export default Background;
