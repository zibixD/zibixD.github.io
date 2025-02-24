"use client";

import { Box, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import styles from "./technologies.module.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface GitHubLanguagesChartProps {
 username: string;
}

interface LanguageStats {
 [key: string]: number;
}

interface ChartData {
 labels: string[];
 datasets: {
  data: number[];
  backgroundColor: string[];
 }[];
}

const Languages: FC<GitHubLanguagesChartProps> = ({ username }) => {
 const [chartData, setChartData] = useState<ChartData | null>(null);

 useEffect(() => {
  const fetchLanguages = async () => {
   try {
    const reposResponse = await fetch(
     `https://api.github.com/users/${username}/repos`
    );
    const repos = await reposResponse.json();

    const languageStats: LanguageStats = {};
    let totalSize = 0;

    for (const repo of repos) {
     const languagesResponse = await fetch(repo.languages_url);
     const languages = await languagesResponse.json();

     Object.entries(languages).forEach(([lang, size]) => {
      languageStats[lang] = (languageStats[lang] || 0) + (size as number);
      totalSize += size as number;
     });
    }

    const sortedLanguages = Object.entries(languageStats).sort(
     (a, b) => b[1] - a[1]
    );
    const labels = sortedLanguages.map(([lang]) => lang);
    const data = sortedLanguages.map(([, size]) =>
     Number(((size / totalSize) * 100).toFixed(2))
    );

    setChartData({
     labels,
     datasets: [
      {
       data,
       backgroundColor: ["#fbbf24", "#60a5fa", "#34d399", "#f06529", "#a78bfa"],
      },
     ],
    });
   } catch (error) {
    console.error("Błąd pobierania danych:", error);
   }
  };

  fetchLanguages();
 }, [username]);

 return chartData ? (
  <Box className={styles.box_languages}>
   <Typography className="title">Statystyki języków z Githuba</Typography>
   <Pie data={chartData} />
  </Box>
 ) : (
  <Typography className="text-center">Ładowanie danych...</Typography>
 );
};

export default Languages;
