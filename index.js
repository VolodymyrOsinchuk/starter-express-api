const express = require("express");
const app = express();
app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Update in 02/05/23!");
});
app.listen(process.env.PORT || 3000);
