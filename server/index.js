const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const jobsRoutes = require("./routes/jobs.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(`${process.env.MONGO_CONN_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("database connected successfully!"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api", jobsRoutes);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
