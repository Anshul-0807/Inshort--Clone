import axios from "axios";

export const getNews = async () => {
  const URl = "";

  try {
    return await axios.get(URL);
  } catch (error) {
    console.log("Error while calling get news api", error);
  }
};
