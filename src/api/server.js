const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>LAGUNA ROLEPLAY — Estado RP Online</h1>");
});

app.listen(process.env.PORT || 3000, () => console.log("Site institucional online"));

