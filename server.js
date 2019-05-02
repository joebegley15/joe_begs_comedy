const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const shows = require("./routes/api/shows.js");

const app = express();

// Body-Parser MW
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

// Connect to mongodb
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

app.use("/api/shows", shows);

const port = process.env.port || 5000;

app.listen(port, () => console.log("Server started on port " + port));
