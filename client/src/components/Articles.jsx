import React from "react";
// component
import { Box } from "@mui/material";
import { useEffect } from "react";
import { getNews } from "../service/api";

const Articles = () => {
  useEffect(() => {
    dailyNews();
  }, []);

  const dailyNews = async () => {
    let response = await getNews();
    console.log(response)
  };

  return <Box></Box>;
};
export default Articles;
