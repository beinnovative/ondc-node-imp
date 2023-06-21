import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import api from "./api/index.js";
import "dotenv/config";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", api);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Example app listening on port !", PORT);
});
