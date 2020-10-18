const express = require("express");
const app = express();
const port = 80;

app.get("/", (req,res) => {
    console.log("reacher");
    res.sendFile("./Wable-Server/wable-server-app/public/index.html")
});
app.listen(port,"0.0.0.0", () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })