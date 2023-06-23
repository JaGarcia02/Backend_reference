import express from "express";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import connection_to_database from "./config/conncetion.js";
import {
  errorHandler,
  notFound,
} from "./middlewares/errorHandler_middleware.js";
import UserRoute from "./routes/user_route.js";

const app = express();
const port = process.env.PORT || 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    withCredentials: true,
  })
);

app.use("/test", UserRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  connection_to_database();
});
