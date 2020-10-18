const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.sendFile("./Wable-Server/wable-server-app/public/index.html")
});

app.listen(80);