import express from "express";
import { getNews } from "../controller/news-controller";
const route = express.Router();

route.get("/news", getNews);

export default route;
