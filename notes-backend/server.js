import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import config from "./config/keys.js";
import notes from "./routes/api/notes.js";

const { PORT, MONGO_URI } = config;

const app = express();
const db = `${MONGO_URI}`;

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

app.use("/api/notes", notes);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
