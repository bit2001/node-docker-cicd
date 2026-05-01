const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello GitHub Actions + Docker + VM Deploy! v2 ");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});



