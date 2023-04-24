import axios from "axios";

export const getNews = async () => {
  const URl = "http://localhost:8000";

  try {
    return await axios.get(URL);
  } catch (error) {
    console.log("Error while calling get news api", error);
  }
};
