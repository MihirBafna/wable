const express = require("express");
const app = express();

app.get("/", (req,res) => {
    console.log("reacher");
    res.sendFile("./Wable-Server/wable-server-app/public/index.html")
});

app.listen(80);